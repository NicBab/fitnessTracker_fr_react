import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Register from './Register';
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
    // window.location.href = <Register />
    setCurrentUser(true)
  }

  //Needs work
  const handleUserLogin = (event) => {
    storeCurrentUser(); 
    setCurrentUser(true);
  }

  //Needs work
  const handleUserLogout = (event) => {
    // localStorage.clear();
    // window.location.href = '';
    clearCurrentUser();
    setCurrentUser(null);
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

