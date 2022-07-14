import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const userRoute = [
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "/about",
    element: <AboutPage />,
    exact: true,
  },
];
