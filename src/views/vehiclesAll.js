import React, { Component } from 'react';
import {getVehicleAll} from "../components/getVehicleInfo";
import PlatesAll from "../components/platesAll";


export default class PlateAll extends Component {
    state = {
        contacts: [],
        vehicles: [],
        reviews: [],
        average: []
    };

    componentDidMount() {
        getVehicleAll().then(res => {
            this.setState({vehicles: res});
        });

    }

    render () {
        const vehicle = this.state.vehicles;

    return (
        <React.Fragment>
            <PlatesAll vehicles={vehicle} />
        </React.Fragment>
        )
    }
}

