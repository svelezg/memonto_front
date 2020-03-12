import React, { Component} from 'react'

export default class Vehicles extends Component {
    state = {
        contacts: [],
        vehicles: [],
        reviews: [],
        plate: []
    };

    componentDidMount() {
        const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjI2NGJjMjQxNGFkMDBkMWM5MjQxOCIsImlhdCI6MTU4MzUxMTA2NSwiZXhwIjoxNTkyMTUxMDY1fQ.KAHk-gEiih7dwSm69cFfcSue_0I5c4L2FJ2yjAMlYKY';
        // const auth = '';
        //fetch('http://jsonplaceholder.typicode.com/users',
        fetch('http://18.216.37.239/api/v1/review/all/vehicle/5e61c6d6b576ad001fb8dd44',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
            })
            .then(res => res.json())
            .then((data) => {
                //this.setState({ contacts: data })
                this.setState({ reviews: data })
            })
            .catch(console.log)
        fetch('http://18.216.37.239/api/v1/vehicle/all',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                }
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ vehicles: data })
            })
            .catch(console.log)

        fetch('http://18.216.37.239/api/v1/vehicle/plate/KCH68D',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ plate: data })
            })
            .catch(console.log)
    }

    render () {
        return (
            <div>
                <center><h1>Vehicle List</h1></center>
                    <div className="card" key={this.state.vehicle._id.toString()}>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.vehicle.plate}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.vehicle.make}</h6>
                            <h6 className="card-text">{this.state.vehicle.model} {this.state.vehicle.year}</h6>
                        </div>
                    </div>

            </div>
        )
    };
}
