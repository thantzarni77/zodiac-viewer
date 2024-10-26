import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import ZodiacResult from "./pages/ZodiacResult";
import Error from "./components/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Main />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "zodiac/:myZodiac",
          element: <ZodiacResult />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
