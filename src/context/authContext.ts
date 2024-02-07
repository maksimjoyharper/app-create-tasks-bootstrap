// import { useReducer, createContext } from "react";

// const initialState = {
//   user: null,
// };

// if (localStorage.getItem("token")) {
//   initialState.user = localStorage.getItem("token");
// }

// const AuthContext = createContext({
//   user: null,
//   login: (userData) => {},
//   logout: () => {},
// });

// function AuthReducer(state, action) {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         user: action.payload,
//       };

//     case "LOGOUT": {
//       return {
//         ...state,
//         user: null,
//       };
//     }
//     default:
//       return state;
//   }
// }

// function AuthProvider(props) {
//   const [state, dispatch] = useReducer(AuthReducer, initialState);

//   const Login = (userData) => {
//     localStorage.setItem("token", userData.token);

//     dispatch({
//       type: "LOGIN",
//       payload: userData,
//     });
//   };

//   function Logout() {
//     localStorage.removeItem("token");
//     dispatch({ type: "LOGOUT" });
//   }

//  return
// }
