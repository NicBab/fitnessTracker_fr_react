import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {
  storeCurrentUser,
  clearCurrentUser,
  createUser
} from '../auth';

import './Header.css';

const Header = ({
  userList,
  currentUser,
  setCurrentUser,
}) => {
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    setSelectedUser(userList[0]);
  }, [ userList ]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSelectChange = (event) => {
    const id = event.target.value;
    const user = userList.find(user => user.id == id);
    setSelectedUser(user);
  }

  const handleUserRegister = (event) => {
      setCurrentUser(true)
  }

  const handleUserLogin = (event) => {
    storeCurrentUser(selectedUser); 
    setCurrentUser(true);
  }

  const handleUserLogout = (event) => {
    setSelectedUser(userList[0]);
    clearCurrentUser();
    setCurrentUser(null);
  }

  return (
    <header>
      <h1>Fitness Tracker</h1>

      <form 
        className="user-select" 
        onSubmit={ handleSubmit } >

        {
          currentUser
          ? <> 
              <NavLink to="/Home" activeClassName="current">Home</NavLink>
              <NavLink to="/Activities" activeClassName="current">Activities</NavLink>
              <NavLink to="/Routines" activeClassName="current">Routines</NavLink>
              <NavLink to="/MyRoutines" activeClassName="current">MyRoutines</NavLink>
              <button onClick={ handleUserLogout }>LOG OUT, { currentUser.username }</button>
            </>

          : <>
              {/* <select onChange={ handleSelectChange }>{
                userList.map(user => (
                  <option key={ user.id } value={ user.id }>
                    { user.username }
                  </option>
                ))
              }</select> */}

              <button onClick={ handleUserLogin }>LOG IN</button>
              <button onClick={ handleUserRegister }>Register</button>
            </>
        }
      </form>

    </header>
  );
}

export default Header;
