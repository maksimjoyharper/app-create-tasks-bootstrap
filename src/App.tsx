// import { BrowserRouter } from "react-router-dom";
import { FormLogin } from "./components/Form";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Users } from "./users/Users.tsx";
import { Login } from "./components/Login/Login.tsx";
import "./index.css";

export const App: React.FC = () => {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <>
              <Route path="/auth" element={<FormLogin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/login" element={<Login />} />
            </>
          )
        )}
      />
    </>
  );
};
