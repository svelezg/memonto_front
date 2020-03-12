import React from 'react'

const Averages = ({ average }) => {
  if (!average){
    return null;
  }
  return (
    <div>
      <center><h1>Rating </h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{average.Average}</h5>
          </div>
        </div>
    </div>
  )
};




export default Averages
