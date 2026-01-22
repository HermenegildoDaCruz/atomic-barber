import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../src/pages/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage/>,
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <HomePage/>,
        }
      ]
  }
]
)

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
