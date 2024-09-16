import { BrowserRouter, Route, Routes } from "react-router-dom";


import ScrollToTop from "./ScrollToTop";
import Payments from "./pages/payments";



const baseRoutes = [
  {
    path: "/",
    element: <Payments />,
    title: "Get Started",
  },
  {
    path: "/payments",
    element: <Payments />,
    title: "App Payments",
  },

  // {
  //   path: "*",
  //   element: <NotFound />,
  //   title: "not-found",
  // },
];



const AppRoutes = () => {

  const pageRoutes = baseRoutes.map(({ path, title, element }) => {

    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>{pageRoutes}</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
