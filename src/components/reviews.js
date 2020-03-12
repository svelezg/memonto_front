import React from 'react'

const Reviews = ({ reviews }) => {
  return (
    <div>
      <center><h1>Reviews</h1></center>
      {reviews.map((review) => (
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">{review.text}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};




export default Reviews
