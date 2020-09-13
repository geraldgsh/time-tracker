import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios(`/api/v1/users`)
      .then(response => {
        setUser(response.data.data[0]);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  return (
    <div className="row mt-6">
      <div className="columns">
        <div className="column">
          <h1 className="is-4 role">{user.role}</h1>
          <p className="name">{user.name}</p>
        </div>
      </div>
    </div>
    );
  }

  export default UserInfo;