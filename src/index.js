import React from 'react';
import {
    Activities,
    Home,
    Login,
    MyRoutines,
    Register,
    Routines
} from './components';

const App = () => {
    return (
      <div className="app">
        <Activities />
        <Home />
        <Login />
        <MyRoutines />
        <Register />
        <Routines />
      </div>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)