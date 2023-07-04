import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import IndonesianPage from "../pages/Indonesian";
import ProvincePage from "../pages/Province";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "indonesia",
    element: <IndonesianPage />,
  },
  {
    path: "provinsi",
    element: <ProvincePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);

export default router;
