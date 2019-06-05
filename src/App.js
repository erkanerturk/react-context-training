import React from "react";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;
