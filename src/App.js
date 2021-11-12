import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetail from './pages/Home/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AllServices from './pages/Home/AllServices/AllServices';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route  path='/home'>
            <Home/>
          </Route>
          <Route  path='/login'>
            <Login/>
          </Route>
          <Route  path='/allService'>
            <AllServices/>
          </Route>
          <PrivateRoute  path='/service/:id'>
            <ServiceDetail/>
          </PrivateRoute>
          <PrivateRoute  path='/dashBoard'>
            <DashBoard/>
          </PrivateRoute>
          <Route  path='/register'>
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
