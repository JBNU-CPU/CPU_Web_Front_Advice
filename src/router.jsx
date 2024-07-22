import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <MainPage/>,
  },
]);

export default router;
