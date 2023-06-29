import React from "react";
import "./user_area.css";
import UserButtons from "./user_buttons";

const UserArea = ({ user }) => {
  return (
    <div className="user-area">
      <div>{user.userName}</div>
      <div>{user.roleName}</div>
      <UserButtons user={user} />
    </div>
  );
};

export default UserArea;
