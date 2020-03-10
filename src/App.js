import React, {Component} from 'react';
//import Contacts from './components/contacts';
import Vehicles from './components/vehicles';
import Reviews from './components/reviews';
import Plate from './components/plate';

class App extends Component {
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
        },
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

  componentDidMount1() {
    const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjI2NGJjMjQxNGFkMDBkMWM5MjQxOCIsImlhdCI6MTU4MzUxMTA2NSwiZXhwIjoxNTkyMTUxMDY1fQ.KAHk-gEiih7dwSm69cFfcSue_0I5c4L2FJ2yjAMlYKY';
    // const auth = '';
    //fetch('http://jsonplaceholder.typicode.com/users',
    fetch('http://18.216.37.239/api/v1/vehicle/all',
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
        this.setState({ vehicles: data })
      })
      .catch(console.log)
  }

  render () {
    { console.log(this.state.plate)}
    return (
      //<Contacts contacts={this.state.contacts} />
      <React.Fragment>
        <Vehicles vehicles={this.state.vehicles} />
        <Plate vehicle={this.state.plate} />
        <Reviews reviews={this.state.reviews} />
      </React.Fragment>
    );
  }
}

export default App;
