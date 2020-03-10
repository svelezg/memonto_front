import React from 'react'

const Plate = ({vehicle}) => {

  return (
    <div>
      <center><h1>Vehicle Info</h1></center>
          <div className="card-body">
            <h5 className="card-title">{vehicle.plate}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{vehicle.make}</h6>
            <p className="card-text">{vehicle.model}</p>
        </div>
    </div>
  )
};

export default Plate
