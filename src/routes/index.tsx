import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../features/Dashboard";
import Molde from "../features/Molde";
import Login from "../features/Login";
import Diagnostic from "../features/Diagnostic";
import PerfilApertura from "../features/molde/PerfilApertura";
import AjusteFuerza from "../features/molde/AjusteFuerza";
import ProteccionMolde from "../features/molde/ProteccionMolde";

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
        path: "molde/perfil-apertura",
        element: <PerfilApertura />,
      },
      {
        path: "molde/ajuste-fuerza",
        element: <AjusteFuerza />,
      },
      {
        path: "molde/proteccion",
        element: <ProteccionMolde />,
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
