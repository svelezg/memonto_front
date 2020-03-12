import React from 'react'

const Plates = ({ vehicles }) => {
    if (!vehicles){
        return null;
    }
    return (
        <div>
            <center><h1>Vehicle</h1></center>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{vehicles.plate}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{vehicles.make}</h6>
                    <h6 className="card-text">{vehicles.model} {vehicles.year}</h6>
                </div>
            </div>
        </div>
    )
};

export default Plates
