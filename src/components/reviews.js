import React from 'react'

const Reviews = ({ reviews }) => {
  return (
    /*<div className="col p-4 d-flex flex-column position-static">*/
     <div>
      <center><h1>Reviews</h1></center>
      {reviews.map((review) => (
          <div className="blog-main">
          <div className="blog-post">
              <h5 className="blog-post-meta">{review.createdAt}</h5>
            <p>{review.text}</p>

          </div>
        </div>
      ))}
    </div>
  )
};




export default Reviews
