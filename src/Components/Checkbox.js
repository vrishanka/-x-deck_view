import React, { useEffect, useState } from "react";

import styled from 'styled-components';
const container = styled.div`

position: absolute;
`

const userData = [
  { name: "user 1" },
  { name: "user 2" },
 
];

function Checkbox() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container" >
  
    {/* //<div className="container" >style={{ width: 400 }}> */}
      <form className="form">
        
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
        
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">Trade locked</label>
        </div>
        {users.map((user) => (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
      </div>
  );
        }
export default Checkbox       
