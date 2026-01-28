import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  LogOut,
  Package,
  Activity,
  ChevronDown,
  ChevronRight,
  Triangle,
  Circle,
  Droplet,
  Database,
  Zap,
  Thermometer,
  Sliders,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const location = useLocation();
  const [isMonitorOpen, setIsMonitorOpen] = useState(true);

  const isMonitorActive = location.pathname.startsWith("/monitor");

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {/* Monitor Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className={
              isMonitorActive
                ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "w-full justify-start text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsMonitorOpen(!isMonitorOpen)}
          >
            <Activity className="mr-2 h-4 w-4" />
            Monitor
            {isMonitorOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            )}
          </Button>

          {isMonitorOpen && (
            <div className="ml-4 pl-4 border-l-2 border-blue-500 space-y-1">
              <Button
                variant="ghost"
                className={
                  location.pathname === "/monitor/vista-general"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/monitor/vista-general">Vista General</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/monitor/diagnostico"
                    ? "w-full justify-start text-sm bg-blue-100 text-blue-700"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/monitor/diagnostico">Diagnóstico de Actuadores</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/monitor/salud"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/monitor/salud">Salud Sistémica</Link>
              </Button>
            </div>
          )}
        </div>

        <Button
          variant={location.pathname === "/molde" ? "default" : "ghost"}
          className={
            location.pathname === "/molde"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/molde">
            <Package className="mr-2 h-4 w-4" />
            Molde
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/eyector" ? "default" : "ghost"}
          className={
            location.pathname === "/eyector"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/eyector">
            <Triangle className="mr-2 h-4 w-4" />
            Eyector
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/core" ? "default" : "ghost"}
          className={
            location.pathname === "/core"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/core">
            <Circle className="mr-2 h-4 w-4" />
            Core
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/inyeccion" ? "default" : "ghost"}
          className={
            location.pathname === "/inyeccion"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/inyeccion">
            <Droplet className="mr-2 h-4 w-4" />
            Inyección
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/charge" ? "default" : "ghost"}
          className={
            location.pathname === "/charge"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/charge">
            <Database className="mr-2 h-4 w-4" />
            Charge
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/boquilla" ? "default" : "ghost"}
          className={
            location.pathname === "/boquilla"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/boquilla">
            <Zap className="mr-2 h-4 w-4" />
            Boquilla
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/temperatura" ? "default" : "ghost"}
          className={
            location.pathname === "/temperatura"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/temperatura">
            <Thermometer className="mr-2 h-4 w-4" />
            Temperatura
          </Link>
        </Button>

        <Button
          variant={
            location.pathname === "/ajustes-produccion" ? "default" : "ghost"
          }
          className={
            location.pathname === "/ajustes-produccion"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/ajustes-produccion">
            <Sliders className="mr-2 h-4 w-4" />
            Ajustes de Producción
          </Link>
        </Button>

        <Button
          variant={location.pathname === "/spc" ? "default" : "ghost"}
          className={
            location.pathname === "/spc"
              ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              : "w-full justify-start text-gray-700 hover:bg-gray-100"
          }
          asChild
        >
          <Link to="/spc">
            <BarChart3 className="mr-2 h-4 w-4" />
            SPC
          </Link>
        </Button>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          asChild
        >
          <Link to="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Link>
        </Button>
      </div>
    </aside>
  );
}
