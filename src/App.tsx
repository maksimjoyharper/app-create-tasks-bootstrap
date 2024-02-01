import { BrowserRouter } from "react-router-dom";
import { FormLogin } from "./components/Form";
import "./index.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FormLogin />
    </BrowserRouter>
  );
};
