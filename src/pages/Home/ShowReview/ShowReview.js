import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StarIcon from "@mui/icons-material/Star";


const ShowReview = () => {
    const [showReview, setShowReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data=>setShowReview(data))
    },[])
    return (
        <div className="container">
            <h2>this is show review {showReview.length}</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    showReview.map(review => <div class="col">
                    <div class="card h-100">
                    <img src={review.userImg} class="card-img-top" alt="review-imges"/>
                    <div class="card-body">
                        <h5 class="card-title"><Rating
                              name="text-feedback"
                              value={`${review.rating}`}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            /></h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;