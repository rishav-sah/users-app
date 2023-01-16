import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import ErrorComponent from "./components/ErrorComponent.js";
import UserContainer from "./components/UserContainer.js";
import UserDetailsComponent from "./components/UserDetailsComponent.js";
const AboutUsComponent = lazy(() => import("./components/AboutUsComponent.js"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <UserContainer />
      },
      {
        path: "users/:id",
        element: <UserDetailsComponent />
      },
    ],
  },
  {
    path: "about-us",
    element: <Suspense fallback={ <h1>Loading...</h1> }><AboutUsComponent /></Suspense>
  },
]); 