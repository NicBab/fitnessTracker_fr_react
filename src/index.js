import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import {
    getCurrentUser
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
    Home,
    Activities,
    Routines,
    MyRoutines
} from './components';



const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userRoutines, setUserRoutines] = useState([]);

  const [home, setHome] = useState([]);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);

//   useEffect(() => {
//     getUserData()
//       .then(users => {
//         setUserList(users)
//       })
//       .catch(error => {
//         throw error
//       });
//   }, []);

  useEffect(() => {
    if (!currentUser) {
      setRoutines(true);
      setUserRoutines([]);
      setActivities(true);
      return;
    }

    getRoutinesByUser(currentUser.id)
      .then(routines => {
        setUserRoutines(routines);
      })
      .catch(error => {
        throw error
      });

    getActivities(currentUser.id)
      .then(activities => {
        setActivities(activities);
      })
      .catch(error => {
        throw error
      });
  }, [currentUser]);

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

                <Route exact path="/">
                  <h2 style={{
                    padding: ".5em"
                  }}>Welcome, { currentUser.username }!</h2>
                </Route>
                
                <Redirect to="/" />
              </Switch>
            </>

          : 
              <Switch>
                <Route exact path="/">
                  <h2 style={{
                    padding: ".5em"
                  }}>Please log in, above.</h2>
                </Route>
                <Redirect to="/" />
              </Switch>
            }
            
      </div>
    </Router>
  );
}

ReactDOM.render(
   
      <App />, document.getElementById('root')
    
);