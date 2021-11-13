import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MangeAllOrder from '../MangeAllOrder/MangeAllOrder';
import MangeAllProduct from '../MangeAllProduct/MangeAllProduct';
import AddProducts from '../AddProducts/AddProducts';
import Review from '../Review/Review';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box style={{textAlign:'start'}} sx={{p:1}}>
                <Box>
                    <Link style={{textDecoration:'none'}} to={`/home`}><Button sx={{mb:2}} variant="contained">home</Button></Link><br />
                    {!admin && <Link  style={{textDecoration:'none'}} to={`${url}/review`}><Button sx={{mb:2}} variant="contained">Review</Button></Link>}
                    {!admin && <Link style={{textDecoration:'none'}} to={`${url}/myOrders`}><Button sx={{mb:2}} variant="contained">My Orders</Button></Link>}
                    {!admin && <Link style={{textDecoration:'none'}} to={`${url}/payment`}><Button sx={{mb:2}} variant="contained">Payment</Button></Link>}
                </Box>
                {admin && <Box>
                    <Link style={{textDecoration:'none'}} to={`${url}/mangeAllOrder`}><Button sx={{mb:2}} variant="contained">Mange all Order</Button></Link>
                    <Link style={{textDecoration:'none'}} to={`${url}/mangeAllProduct`}><Button sx={{mb:2}} variant="contained">Mange all Product</Button></Link>
                    <Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}><Button sx={{mb:2}} variant="contained">Make Admin</Button></Link>
                    <Link style={{textDecoration:'none'}} to={`${url}/addProduct`}><Button  variant="contained">Add Product</Button></Link> <br/>
                </Box>} 
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <AdminRoute  path={`${path}/mangeAllOrder`}>
                       <MangeAllOrder/>
                    </AdminRoute>
                    <AdminRoute  path={`${path}/mangeAllProduct`}>
                       <MangeAllProduct/>
                    </AdminRoute>
                    <Route  path={`${path}/review`}>
                       <Review/>
                    </Route>
                    <Route  path={`${path}/myOrders`}>
                       <MyOrders/>
                    </Route>
                    <Route  path={`${path}/payment`}>
                       <Payment/>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProducts/>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;