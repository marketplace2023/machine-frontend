import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  Activity,
  AlertTriangle,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Estado de Máquina */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Estado de Máquina
            </span>
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">En Producción</h3>
            <p className="text-sm font-medium text-green-600">
              Estable (Ciclo 452)
            </p>
          </div>
        </Card>

        {/* OEE Global */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              OEE Global
            </span>
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">91.4%</h3>
            <p className="text-sm font-medium text-blue-600">
              +1.2% vs turno anterior
            </p>
          </div>
        </Card>

        {/* Tiempo de Ciclo */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Tiempo de Ciclo
            </span>
            <Clock className="h-5 w-5 text-orange-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">12.4s</h3>
            <p className="text-sm font-medium text-orange-600">
              -0.3s (Desviación)
            </p>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vista de Planta - Ocupa 2 columnas */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                VISTA DE PLANTA (RT)
              </h2>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">FLUJO</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-gray-600">CALOR</span>
              </div>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="space-y-6">
            {/* Husillo Temperature */}
            <div className="inline-block">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                  Husillo (Inyección)
                </p>
                <p className="text-3xl font-bold text-blue-600">245.2°C</p>
                <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
            </div>

            {/* Machine Visual */}
            <div className="relative h-48 flex items-center justify-center">
              {/* Simplified machine representation */}
              <div className="relative flex items-center gap-8">
                {/* Injection Unit */}
                <div className="w-32 h-32 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                </div>

                {/* Barrel/Nozzle */}
                <div className="relative">
                  <div className="w-64 h-16 bg-blue-200 rounded-r-lg border-2 border-blue-400 relative overflow-hidden">
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          style={{
                            animation: `flow 2s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-blue-400"></div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#e5e7eb"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#10b981"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.98)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-lg font-bold text-gray-900">98%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-medium uppercase tracking-wide">
                  Salud Servos
                </p>
              </div>

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#e5e7eb"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#10b981"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.92)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-lg font-bold text-gray-900">92%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-medium uppercase tracking-wide">
                  Estabilidad
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Fuerza de Cierre
                  </p>
                  <p className="text-xl font-bold text-gray-900">500.0 kN</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Sidebar - Alerts and Maintenance */}
        <div className="space-y-6">
          {/* Alertas Críticas */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Alertas Críticas
              </h3>
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                2 ACTIVAS
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-900">
                    Sobre-torque en Servo A1
                  </p>
                  <p className="text-xs text-red-700 mt-1">
                    Unidad de cierre • hace 4 min
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-orange-900">
                    Variación en Zona 3
                  </p>
                  <p className="text-xs text-orange-700 mt-1">
                    Desviación de ±2.5°C • Calor
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mantenimiento Predictivo */}
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Mantenimiento Predictivo
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-900">
                    Lubricación Centralizada
                  </p>
                  <p className="text-sm font-bold text-blue-600">124 hrs</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-900">
                    Inspección Husillo
                  </p>
                  <p className="text-sm font-bold text-gray-600">1,450 hrs</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6" variant="outline">
              GESTIONAR CALENDARIO
            </Button>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
