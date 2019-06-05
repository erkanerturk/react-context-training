import React from "react";

const UserContext = React.createContext();
// const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const actionTypes = {
  DELETE_USER: "user/DELETE_USER"
};

const UserActions = {
  deleteUser: id => ({ type: actionTypes.DELETE_USER, payload: id })
};

const initialState = {
  users: [
    { id: 1, name: "Test1" },
    { id: 2, name: "Test2" },
    { id: 3, name: "Test3" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
      break;

    default:
      return { ...state };
      break;
  }
};

class UserProvider extends React.Component {
  state = {
    ...initialState,
    userDispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserProvider, UserConsumer, UserActions };
// export default UserContext;
