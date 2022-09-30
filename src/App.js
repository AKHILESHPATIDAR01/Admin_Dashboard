
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {productInputs, userInputs} from "./formSource";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import './style/dark.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        index: true,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "users",
        element: <List />,
        index: true,
    },
    {
        path: "users/:userId",
        element: <Single />,
    },
    {
        path: "users/new",
        element: <New inputs={userInputs} title="Add New User"  />,
    },
    {
        path: "products",
        element: <List />,
        index: true,
    },
    {
        path: "products/:productId",
        element: <Single />,
    },
    {
        path: "products/new",
        element: <New inputs={productInputs} title="Add New Product" />,
    },
]);

function App() {
    const { darkMode } = useContext(DarkModeContext)

  return (
      <div className={darkMode ? "app dark" : "App"}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
