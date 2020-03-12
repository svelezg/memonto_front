import React from 'react'

const PlatesAll = ({ vehicles }) => {
    return (
        <div>
            <center><h1>Vehicle List</h1></center>
            {vehicles.map(vehicle =>
                <div className="card" key={vehicle._id.toString()}>
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.plate}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{vehicle.make}</h6>
                        <h6 className="card-text">{vehicle.model} {vehicle.year}</h6>
                    </div>
                </div>
            )}
        </div>
    )
};
export default PlatesAll
