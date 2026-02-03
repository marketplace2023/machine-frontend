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
  Wrench,
} from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const location = useLocation();
  const [isMonitorOpen, setIsMonitorOpen] = useState(true);
  const [isMoldeOpen, setIsMoldeOpen] = useState(true);
  const [isEyectorOpen, setIsEyectorOpen] = useState(true);
  const [isCoreOpen, setIsCoreOpen] = useState(true);
  const [isInyeccionOpen, setIsInyeccionOpen] = useState(true);
  const [isChargeOpen, setIsChargeOpen] = useState(true);
  const [isBoquillaOpen, setIsBoquillaOpen] = useState(true);
  const [isTemperaturaOpen, setIsTemperaturaOpen] = useState(true);
  const [isAjustesOpen, setIsAjustesOpen] = useState(true);

  const isMonitorActive = location.pathname.startsWith("/monitor");
  const isMoldeActive = location.pathname.startsWith("/molde");
  const isEyectorActive = location.pathname.startsWith("/eyector");
  const isCoreActive = location.pathname.startsWith("/core");
  const isInyeccionActive = location.pathname.startsWith("/inyeccion");
  const isChargeActive = location.pathname.startsWith("/charge");
  const isBoquillaActive = location.pathname.startsWith("/boquilla");
  const isTemperaturaActive = location.pathname.startsWith("/temperatura");
  const isAjustesActive = location.pathname.startsWith("/ajustes");

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

        {/* Molde Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className={
              isMoldeActive
                ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "w-full justify-start text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsMoldeOpen(!isMoldeOpen)}
          >
            <Package className="mr-2 h-4 w-4" />
            Molde
            {isMoldeOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            )}
          </Button>

          {isMoldeOpen && (
            <div className="ml-4 pl-4 border-l-2 border-blue-500 space-y-1">
              <Button
                variant="ghost"
                className={
                  location.pathname === "/molde/perfil-apertura"
                    ? "w-full justify-start text-sm bg-blue-100 text-blue-700"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/molde/perfil-apertura">Perfil Apertura/Cierre</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/molde/ajuste-fuerza"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/molde/ajuste-fuerza">Ajuste Fuerza</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/molde/proteccion"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/molde/proteccion">Protección Molde</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Eyector Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className={
              isEyectorActive
                ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "w-full justify-start text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsEyectorOpen(!isEyectorOpen)}
          >
            <Triangle className="mr-2 h-4 w-4" />
            Eyector
            {isEyectorOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            )}
          </Button>

          {isEyectorOpen && (
            <div className="ml-4 pl-4 border-l-2 border-blue-500 space-y-1">
              <Button
                variant="ghost"
                className={
                  location.pathname === "/eyector/control-etapas"
                    ? "w-full justify-start text-sm bg-blue-100 text-blue-700"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/eyector/control-etapas">Control de Etapas</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/eyector/parametros-avance"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/eyector/parametros-avance">
                  Parámetros de Avance
                </Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/eyector/configuracion-vibracion"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/eyector/configuracion-vibracion">
                  Configuración Vibración
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Core Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className={
              isCoreActive
                ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "w-full justify-start text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsCoreOpen(!isCoreOpen)}
          >
            <Circle className="mr-2 h-4 w-4" />
            Core
            {isCoreOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            )}
          </Button>

          {isCoreOpen && (
            <div className="ml-4 pl-4 border-l-2 border-blue-500 space-y-1">
              <Button
                variant="ghost"
                className={
                  location.pathname === "/core/gestion-machos"
                    ? "w-full justify-start text-sm bg-blue-100 text-blue-700"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/core/gestion-machos">Gestión de Machos</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/core/seguridad-machos"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/core/seguridad-machos">Seguridad Machos</Link>
              </Button>
              <Button
                variant="ghost"
                className={
                  location.pathname === "/core/desenroscado"
                    ? "w-full justify-start text-sm bg-gray-100 text-gray-900"
                    : "w-full justify-start text-sm text-gray-600 hover:bg-gray-50"
                }
                asChild
              >
                <Link to="/core/desenroscado">Desenroscado</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Inyección Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant={isInyeccionActive ? "default" : "ghost"}
            className={
              isInyeccionActive
                ? "w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                : "w-full justify-between text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsInyeccionOpen(!isInyeccionOpen)}
          >
            <span className="flex items-center">
              <Droplet className="mr-2 h-4 w-4" />
              Inyección
            </span>
            {isInyeccionOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {isInyeccionOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
              <Button
                variant={
                  location.pathname === "/inyeccion/perfiles-graficas"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/inyeccion/perfiles-graficas"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/inyeccion/perfiles-graficas">
                  Perfiles y Gráficas
                </Link>
              </Button>

              <Button
                variant={
                  location.pathname === "/inyeccion/ajuste-variables"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/inyeccion/ajuste-variables"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/inyeccion/ajuste-variables">
                  Ajuste de Variables
                </Link>
              </Button>

              <Button
                variant={
                  location.pathname === "/inyeccion/monitor-proceso"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/inyeccion/monitor-proceso"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/inyeccion/monitor-proceso">Monitor de Proceso</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Charge Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant={isChargeActive ? "default" : "ghost"}
            className={
              isChargeActive
                ? "w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                : "w-full justify-between text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsChargeOpen(!isChargeOpen)}
          >
            <span className="flex items-center">
              <Database className="mr-2 h-4 w-4" />
              Carga
            </span>
            {isChargeOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {isChargeOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
              <Button
                variant={
                  location.pathname === "/charge/control-carga"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/charge/control-carga"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/charge/control-carga">Control de Carga</Link>
              </Button>
              <Button
                variant={
                  location.pathname === "/charge/ajuste-avanzado"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/charge/ajuste-avanzado"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/charge/ajuste-avanzado">Ajuste Avanzado</Link>
              </Button>
              <Button
                variant={
                  location.pathname === "/charge/monitor-plastificacion"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/charge/monitor-plastificacion"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/charge/monitor-plastificacion">
                  Monitor de Plastificación
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Boquilla Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant={isBoquillaActive ? "default" : "ghost"}
            className={
              isBoquillaActive
                ? "w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                : "w-full justify-between text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsBoquillaOpen(!isBoquillaOpen)}
          >
            <span className="flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              Boquilla
            </span>
            {isBoquillaOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {isBoquillaOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
              <Button
                variant={
                  location.pathname === "/boquilla/movimiento-fuerza"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/boquilla/movimiento-fuerza"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/boquilla/movimiento-fuerza">
                  Movimiento y Fuerza
                </Link>
              </Button>

              <Button
                variant={
                  location.pathname === "/boquilla/configuracion-sprue"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/boquilla/configuracion-sprue"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/boquilla/configuracion-sprue">
                  Configuración Sprue
                </Link>
              </Button>

              <Button
                variant={
                  location.pathname === "/boquilla/calibracion-carro"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/boquilla/calibracion-carro"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/boquilla/calibracion-carro">
                  Calibración de Carro
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Temperatura Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant={isTemperaturaActive ? "default" : "ghost"}
            className={
              isTemperaturaActive
                ? "w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                : "w-full justify-between text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsTemperaturaOpen(!isTemperaturaOpen)}
          >
            <span className="flex items-center">
              <Thermometer className="mr-2 h-4 w-4" />
              Temperatura
            </span>
            {isTemperaturaOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {isTemperaturaOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
              <Button
                variant={
                  location.pathname === "/temperatura/control-zonas"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/temperatura/control-zonas"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/temperatura/control-zonas">Control de Zonas</Link>
              </Button>
              <Button
                variant={
                  location.pathname === "/temperatura/ajustes-pid"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/temperatura/ajustes-pid"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/temperatura/ajustes-pid">Ajustes PID</Link>
              </Button>
              <Button
                variant={
                  location.pathname === "/temperatura/eficiencia-energetica"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/temperatura/eficiencia-energetica"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/temperatura/eficiencia-energetica">
                  Eficiencia Energética
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Ajustes Menu with Submenu */}
        <div className="space-y-1">
          <Button
            variant={isAjustesActive ? "default" : "ghost"}
            className={
              isAjustesActive
                ? "w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                : "w-full justify-between text-gray-700 hover:bg-gray-100"
            }
            onClick={() => setIsAjustesOpen(!isAjustesOpen)}
          >
            <span className="flex items-center">
              <Sliders className="mr-2 h-4 w-4" />
              Ajustes
            </span>
            {isAjustesOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>

          {isAjustesOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
              <Button
                variant={
                  location.pathname === "/ajustes/ajustes-produccion"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/ajustes/ajustes-produccion"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/ajustes/ajustes-produccion">
                  Ajustes de Producción
                </Link>
              </Button>
              <Button
                variant={
                  location.pathname === "/ajustes/mantenimiento-lubricacion"
                    ? "default"
                    : "ghost"
                }
                className={
                  location.pathname === "/ajustes/mantenimiento-lubricacion"
                    ? "w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    : "w-full justify-start text-gray-600 hover:bg-gray-50 text-sm"
                }
                asChild
              >
                <Link to="/ajustes/mantenimiento-lubricacion">
                  Mantenimiento y Lubricación
                </Link>
              </Button>
            </div>
          )}
        </div>

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
