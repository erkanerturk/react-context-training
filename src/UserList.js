import React from "react";
import { UserConsumer, UserActions } from "./UserContext";

const UserList = ({ userDispatch, users }) => {
  return users.map(user => (
    <div>
      <span onClick={() => userDispatch(UserActions.deleteUser(user.id))}>
        Delete -{" "}
      </span>
      <span>{user.name}</span>
    </div>
  ));
};

export default props => (
  <UserConsumer>
    {({ users, userDispatch }) => {
      return <UserList {...props} users={users} userDispatch={userDispatch} />;
    }}
  </UserConsumer>
);
