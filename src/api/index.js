import axios from 'axios';

const userToken = localStorage.getItem('token');


export async function registerUser(username, password) {
  const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/users/register';
  const url = `${BASE_URL}/users/register`
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${userToken}`
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setToken(result.data.token);
    })
    .catch(console.error);
};
function setToken(token) {
  localStorage.setItem("token", token);
}
function getToken() {
  return localStorage.getItem("token");
}


export async function getUserData() {
  const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/user/me'
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
  const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/users/routines";
  try {
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



// export async function getRoutinesByUser(userId) {
//   const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/users/routines";
//   try {
//       const {data} = await axios.get(`${BASE_URL}/users/${userId}/routines/`);
//       return data;
//   } catch (error) {
//     throw error  
//   }
// };


export async function getRoutines() {
  const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/routines";
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    return data.routines;
  } catch (err) {
    console.error(err);
  }
};


export async function getActivities() {
  const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/activities";
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    return data.activities;
  } catch (err) {
    console.error(err);
  }
};



