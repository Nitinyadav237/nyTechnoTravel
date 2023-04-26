import { useEffect, useReducer } from "react";
import { createContext } from "react";

const initial_state = {
  user:
    localStorage.getItem("user") !== undefined && localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
  token:
    localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        token: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        token: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
  }, [state.user, state.token]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
