import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Study from "./pages/Study"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/study",
    element: <Study />,
  },
]);

export default router;
