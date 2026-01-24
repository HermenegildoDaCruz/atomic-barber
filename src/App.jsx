import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../src/pages/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage, {action as newsletterAction} from "./pages/HomePage";


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
          action: newsletterAction,
        },
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
