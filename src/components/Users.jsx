import axios from "../helper/axios";
import React, { useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate(); // useNavigate ka use redirect jease hota hai autr ye hame react-router-dom se milta hai our navigate variable me route ka path dena hai
  const { pathname } = useLocation(); // route ki location nikaalne ke use karte hai

  const [users, setUsers] = useState([]);

  // axios call
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-blue-600 mb-5">Users</h1>
      <button onClick={getUsers} className="bg-red-300 px-4 py-2 rounded-md">
        Get Users
      </button>
      <hr />
      <ul className="my-10 list-disc">
        {users.length > 0
          ? users.map((user) => (
              <li className="list-item" key={user.id}>
                {user.name}
              </li>
            ))
          : "Loading..."}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Users;
