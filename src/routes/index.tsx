import MainLayout from "../layout/main";
import Home from "../pages/home";
import CountryDetailsPage from "../pages/details";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <CountryDetailsPage />,
      },
    ],
  },
];

export default routes;
