import React, { Component } from 'react';
import {getAverageVehicle, getReviewId, getDriverInfo, getVehiclePlate} from "../components/getVehicleInfo";
import Plates from "../components/plates";
import Reviews from "../components/reviews";
import Averages from "../components/averages";

export default class Plate extends Component {
    state = {
        contacts: [],
        vehicles: [],
        reviews: [],
        average: []
    };

    componentDidMount() {
        getVehiclePlate(localStorage.plate).then(res => {
            this.setState({vehicles: res});
            let id = "";
            if (res){
                id = res._id;
            }
            if (id !== ""){
                getReviewId(id).then(res => {
                    this.setState({reviews: res});
                });
                getAverageVehicle(id).then(res => {
                    this.setState({average: res});
                });
                getDriverInfo(id).then(res => {
                    this.setState({average: res});
                });
            }
        });

    }

    render () {
        const vehicle = this.state.vehicles;
        const reviews = this.state.reviews;
        const averages = this.state.average;
    let body = "Hello World";

    return (
        <React.Fragment>
            <Plates vehicles={vehicle} />
            <Reviews reviews={reviews} />
            <Averages average={averages} />
        </React.Fragment>
        )
    }
}

