import React from 'react';
import ReactDOM from 'react-dom';

import {
    // Activities,
    Home,
    // Login,
    // MyRoutines,
    // Register,
    // Routines
} from './components';

import {
    fetchActivities
} from './api'


const App = () => {
    return (
        <header>
      <h1>Fitness Tracker</h1>
      </header>
    )
    
    //   <div className="app">
    //     <Activities />
    //     <Home />
    //     <Login />
    //     <MyRoutines />
    //     <Register />
    //     <Routines />
    //   </div>

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)