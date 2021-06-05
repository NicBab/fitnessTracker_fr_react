import axios from 'axios';

import { storeCurrentUser } from '../auth'

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'

const BASE = process.env.REACT_APP_FITNESS_TRACKR_API_URL

const userToken = localStorage.getItem('token');


export async function registerUser(username, password) {
  try {
    const response =
        await fetch(`${BASE}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
    const data = await response.json()
    const token = await data.token
    storeCurrentUser(token)
  } catch (error) {
      console.log(error)
  }
};


export async function loginUser(username, password) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/login`, {
        username,
        password
      })
      console.log(response)
      // const token = 

    } catch(error) {
      throw error
    }  
}



export async function getUserData() {
  const url = `${BASE_URL}/users/me`;
  const userToken = localStorage.getItem("token")
  await fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userToken}`
  },
}).then(response => response.json())
  .then(result => {
      console.log(result)
  })
  .catch(console.error);
};


export async function getRoutinesByUser() {
  try {
    const userToken = localStorage.getItem()
    const response = await fetch(`${BASE_URL}/users/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    return data.user.routines;
  } catch (err) {
    console.error(err);
  }
};



export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    return data.routines;
  } catch (err) {
    console.error(err);
  }
};


export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    return data.activities;
  } catch (err) {
    console.error(err);
  }
};



// export async function getRoutinesByUser(userId) {
//   const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/users/routines";
//   try {
//       const {data} = await axios.get(`${BASE_URL}/users/${userId}/routines/`);
//       return data;
//   } catch (error) {
//     throw error  
//   }
// };



