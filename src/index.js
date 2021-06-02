import React from 'react';
import {
    Activities,
    Home,
    MyRoutines,
    Routines
} from './components';

const App = () => {
    return <div className="app">

        <Activities />
        <Home />
        <MyRoutines />
        <Routines />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)