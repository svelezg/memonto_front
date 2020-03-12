import React, { Component } from 'react';
import { getVehicleAll } from "./getVehicleInfo";

export default class GetPlate extends Component {
    constructor () {
        super();
        this.state = {
          plate: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit (e) {
        e.preventDefault();
        console.log(this.state.plate);
        let getPlate = "";
        getPlate = this.state.plate;
       /* if (getPlate !== undefined) {
            localStorage.setItem("plate",getPlate);
            this.props.history.push('/plate');
        }
        else */
       if (getPlate === "")
            this.props.history.push('/plates');
       else {
           localStorage.setItem("plate", getPlate);
           this.props.history.push('/plate');
       }
    }

    render ()
        {
        return (
            <div className='container pl-10 pr-10 mt-5 d-flex flex-column align-items-center justify-content-start'>
                <h1><strong>Placa</strong></h1><br/>
                <form noValidate onSubmit={this.onSubmit} className='form-signin h-100' id='form'>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            name='plate'
                            placeholder='ABC123'
                            value={this.state.plate}
                            onChange={this.onChange}
                            id='in'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary btn-block' id='btn-in'>
                        Consultar
                    </button> <br />
                </form> <br />
            </div>
        )
    }
}
