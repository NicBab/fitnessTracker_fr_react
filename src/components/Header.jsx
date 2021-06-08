import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import Register from './Register';
import Home from './Home';
import { loginUser } from '../api';
import {
  storeCurrentUser,
  clearCurrentUser,
  createUser
} from '../auth';


const Header = ({
  currentUser,
  setCurrentUser,
}) => {

  const [selectedUser, setSelectedUser] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleUserRegister = (event) => { 
    window.location.href = <Home />
    setCurrentUser(true)
  }

  const handleUserLogin = (event) => {
    window.location.href = <Home />
    loginUser()
  
  }

  const handleUserLogout = (event) => {
    clearCurrentUser();
    setCurrentUser(false);
  }

  return (
    <header>
      <h1>Fitness TrackR</h1>
      <nav 
        className="user-select" >
        {
          currentUser
          ? <> 
              <NavLink to="/Home" activeClassName="current">Home</NavLink>
              <NavLink to="/Activities" activeClassName="current">Activities</NavLink>
              <NavLink to="/Routines" activeClassName="current">Routines</NavLink>
              <NavLink to="/MyRoutines" activeClassName="current">MyRoutines</NavLink>
              <button onClick={ handleUserLogout }>LOG OUT{ currentUser.username }</button>
            </>
          : <>
              <button onClick={ handleUserLogin }>LOG IN</button>
              <button onClick={ handleUserRegister }>Register</button>
            </>
        }
      </nav>
    </header>
  );
}

export default Header;

