import React, { Component } from 'react';
import {loginUser} from "../components/userSignin";

export default class Home extends Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
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

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        loginUser(user).then(res => {
            if (res !== undefined) {
                this.props.history.push('/plate');
            }
            else
                this.props.history.push('/');
            this.setState({
                email : "",
                password : ""
            });
        });
    }

    render() {
        return (
            <div className='container pl-10 pr-10 mt-5 d-flex flex-column align-items-center justify-content-start'>
                <h1><strong>Sign In</strong></h1><br/>
                <form noValidate onSubmit={this.onSubmit} className='form-signin h-100' id='form'>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            placeholder='Enter Email'
                            value={this.state.email}
                            onChange={this.onChange}
                            id='in'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            placeholder='Enter Password'
                            value={this.state.password}
                            onChange={this.onChange}
                            id='in'
                        />
                    </div>
                    {/*<small class='form-text' id='form-text'><strong>Forgot your password?</strong></small> <br />*/}
                    <button type='submit' className='btn btn-primary btn-block' id='btn-in'>
                        Login
                    </button> <br />
                  {/*  <div className='form-check'>
                        <input type='checkbox' class='form-check-input' id='check1' />
                        <label class='form-check-label' for='check1' id='form-text'>Keep me signed in</label>
                    </div>*/}
                </form> <br />
                {/*<p className='justify-self-end'>Not a member?
                    <a href='index.html#sect2'>
                        <b>Get started</b>
                    </a>
                </p>*/}
            </div>
        );
    }
}
