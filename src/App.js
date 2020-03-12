import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/home';
import Plate from "./views/vehicles";
import GetPlate from "./components/getPlate";
import PlatesAll from "./views/vehiclesAll";

function App () {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/getPlate' component={GetPlate} />
            <Route path='/plate' component={Plate} />
            <Route path='/plates' component={PlatesAll} />
        </Router>
    );
}

export default App;

