import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../features/Dashboard";
import Molde from "../features/Molde";
import Login from "../features/Login";
import Diagnostic from "../features/Diagnostic";
import PerfilApertura from "../features/molde/PerfilApertura";
import AjusteFuerza from "../features/molde/AjusteFuerza";
import ProteccionMolde from "../features/molde/ProteccionMolde";
import ControlEtapas from "../features/eyector/ControlEtapas";
import ParametrosAvance from "../features/eyector/ParametrosAvance";
import GestionMachos from "../features/core/GestionMachos";
import PerfilesGraficas from "../features/inyeccion/PerfilesGraficas";
import AjusteVariables from "../features/inyeccion/AjusteVariables";
import ControlCarga from "../features/charge/ControlCarga";
import AjusteAvanzado from "../features/charge/AjusteAvanzado";
import MovimientoFuerza from "../features/boquilla/MovimientoFuerza";
import ControlZonas from "../features/temperatura/ControlZonas";
import AjustesPID from "../features/temperatura/AjustesPID";
import EficienciaEnergetica from "../features/temperatura/EficienciaEnergetica";
import AjustesProduccion from "../features/AjustesProduccion";
import MantenimientoLubricacion from "../features/MantenimientoLubricacion";
import SPC from "../features/SPC";

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
        path: "eyector/control-etapas",
        element: <ControlEtapas />,
      },
      {
        path: "eyector/parametros-avance",
        element: <ParametrosAvance />,
      },
      {
        path: "eyector/configuracion-vibracion",
        element: <Dashboard />,
      },
      {
        path: "core/gestion-machos",
        element: <GestionMachos />,
      },
      {
        path: "inyeccion/perfiles-graficas",
        element: <PerfilesGraficas />,
      },
      {
        path: "inyeccion/ajuste-variables",
        element: <AjusteVariables />,
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
      {
        path: "charge/control-carga",
        element: <ControlCarga />,
      },
      {
        path: "charge/ajuste-avanzado",
        element: <AjusteAvanzado />,
      },
      {
        path: "boquilla/movimiento-fuerza",
        element: <MovimientoFuerza />,
      },
      {
        path: "temperatura/control-zonas",
        element: <ControlZonas />,
      },
      {
        path: "temperatura/ajustes-pid",
        element: <AjustesPID />,
      },
      {
        path: "temperatura/eficiencia-energetica",
        element: <EficienciaEnergetica />,
      },
      {
        path: "ajustes/ajustes-produccion",
        element: <AjustesProduccion />,
      },
      {
        path: "ajustes/mantenimiento-lubricacion",
        element: <MantenimientoLubricacion />,
      },
      {
        path: "spc",
        element: <SPC />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
