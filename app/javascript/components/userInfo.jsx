import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/api/v1/users`)
      .then(response => {
        console.log(response.data.data[0].name);
        setUser(response.data.data[0]);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  return (
    <div className="row">
      <div className="columns">
        <div className="column role">
          <h1 className="title is-2">{user.role}</h1>
          <p>{user.name}</p>
        </div>
      </div>
    </div>
    );
  }

  export default UserInfo;