import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../features/Dashboard";
import Molde from "../features/Molde";
import Login from "../features/Login";
import Diagnostic from "../features/Diagnostic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "molde",
        element: <Molde />,
      },
      {
        path: "monitor/vista-general",
        element: <Dashboard />,
      },
      {
        path: "monitor/diagnostico",
        element: <Diagnostic />,
      },
      {
        path: "monitor/salud",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
