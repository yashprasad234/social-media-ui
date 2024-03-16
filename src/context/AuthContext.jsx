import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: {
      $oid: "65e35b155f81c082bc16cedc",
    },
    username: "bane",
    email: "bane@gmail.com",
    password: "$2b$10$FI5dmqeW4SLmnT7TDXwQ2etSR8c6m6DVCGQYE731ma7RgkvUoqxUa",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    following: ["65e3691287835d167309a0dc"],
    isAdmin: false,
    createdAt: {
      $date: "2024-03-02T17:00:05.349Z",
    },
    updatedAt: {
      $date: "2024-03-11T15:03:11.081Z",
    },
    __v: 0,
    city: "New York",
    desc: "Hey friends!",
    from: "Madrid",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
