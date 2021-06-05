import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import {
    getCurrentUser,
} from './auth';


import {
    registerUser,
    getUserData,
    getRoutinesByUser,
    getRoutines,
    getActivities,
} from './api'


import {
    Header,
    Register,
    Home,
    Activities,
    Routines,
    MyRoutines,
    Footer,
} from './components/Index';



const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userRoutines, setUserRoutines] = useState([]);

  const [home, setHome] = useState([]);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);

 

  return (
    <Router>
      <div id="App">
        <Header
          userList={ userList }
          currentUser={ currentUser }
          setCurrentUser={ setCurrentUser } />
        {
          currentUser
          ? <>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>

                <Route path="/activities">
                  <Activities />
                </Route>

                <Route path="/routines">
                  <Routines />
                </Route>

                <Route path="/myRoutines">
                  <MyRoutines />
                </Route>

                <Route exact path="/login">
                  <h2 style={{padding: ".5em"}}>Welcome</h2>
                </Route>
                
                <Redirect to="/home" />
              </Switch>
            </>
           : 
               <Switch>
                 <Route path="/">
                   <h2 style={{padding: ".5em"}}>Welcome to Fitness TrackR...log in or register above.</h2>
                 </Route>
                 <Redirect to="/home" />
              </Switch>
            }
      </div>
    </Router>
  );
}

ReactDOM.render(
      <App />, document.getElementById('root')   
);



// { currentUser.username }!