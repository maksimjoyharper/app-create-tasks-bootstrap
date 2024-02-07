import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { client } from "./apollo/client.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
