import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  Activity,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { useWebSocket } from "../hooks/useWebSocket";
import { LiveMonitoringData } from "../api/monitoring";
import { useQuery } from "@tanstack/react-query";
import { alertsApi } from "../api/alerts";

export default function Dashboard() {
  // WebSocket para datos en tiempo real
  const { data: liveData, isConnected } =
    useWebSocket<LiveMonitoringData>("monitoring:live");

  // API REST para alertas
  const { data: alerts } = useQuery({
    queryKey: ["alerts"],
    queryFn: alertsApi.getActiveAlerts,
    refetchInterval: 5000, // Actualizar cada 5 segundos
  });

  // Valores por defecto mientras se conecta
  const oee = liveData?.oee ?? 0;
  const cycleTime = liveData?.cycleTime ?? 0;
  const servosHealth = liveData?.servosHealth ?? "good";

  // Color del estado de servos
  const servosHealthColor =
    servosHealth === "good"
      ? "text-green-600"
      : servosHealth === "warning"
        ? "text-orange-600"
        : "text-red-600";

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      {!isConnected && (
        <div className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm font-medium">
            Conectando con el backend...
          </span>
        </div>
      )}

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Estado de Máquina */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Estado de Máquina
            </span>
            <CheckCircle2
              className={`h-5 w-5 ${isConnected ? "text-green-500" : "text-gray-400"}`}
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">
              {isConnected ? "En Producción" : "Sin Conexión"}
            </h3>
            <p
              className={`text-sm font-medium ${isConnected ? "text-green-600" : "text-gray-400"}`}
            >
              {isConnected ? "Estable (Tiempo Real)" : "Esperando datos..."}
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
            <h3 className="text-2xl font-bold text-gray-900">
              {oee.toFixed(1)}%
            </h3>
            <p className="text-sm font-medium text-blue-600">
              Datos en tiempo real
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
            <h3 className="text-2xl font-bold text-gray-900">
              {cycleTime.toFixed(1)}s
            </h3>
            <p className="text-sm font-medium text-orange-600">
              Actualización en vivo
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
                      stroke={
                        servosHealth === "good"
                          ? "#10b981"
                          : servosHealth === "warning"
                            ? "#f59e0b"
                            : "#ef4444"
                      }
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - (servosHealth === "good" ? 0.98 : servosHealth === "warning" ? 0.75 : 0.45))}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className={`text-lg font-bold ${servosHealthColor}`}>
                      {servosHealth === "good"
                        ? "98%"
                        : servosHealth === "warning"
                          ? "75%"
                          : "45%"}
                    </p>
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
              <span
                className={`px-2 py-1 ${alerts && alerts.length > 0 ? "bg-red-500" : "bg-green-500"} text-white text-xs font-bold rounded-full`}
              >
                {alerts?.length ?? 0} ACTIVAS
              </span>
            </div>
            <div className="space-y-3">
              {!alerts || alerts.length === 0 ? (
                <div className="text-center py-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    No hay alertas activas
                  </p>
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`flex gap-3 p-3 rounded-lg border ${
                      alert.type === "error"
                        ? "bg-red-50 border-red-100"
                        : alert.type === "warning"
                          ? "bg-orange-50 border-orange-100"
                          : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <AlertTriangle
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        alert.type === "error"
                          ? "text-red-600"
                          : alert.type === "warning"
                            ? "text-orange-600"
                            : "text-blue-600"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          alert.type === "error"
                            ? "text-red-900"
                            : alert.type === "warning"
                              ? "text-orange-900"
                              : "text-blue-900"
                        }`}
                      >
                        {alert.message}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          alert.type === "error"
                            ? "text-red-700"
                            : alert.type === "warning"
                              ? "text-orange-700"
                              : "text-blue-700"
                        }`}
                      >
                        {new Date(alert.timestamp).toLocaleTimeString("es-ES")}
                      </p>
                    </div>
                  </div>
                ))
              )}
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

      {/* Línea de Vida (Live Stream) */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Línea de Vida (Live Stream)
              </h2>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Ciclo actual: 451.3s • Consumo: 42.5 kW
            </p>
          </div>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-600 font-medium">PRESIÓN (BAR)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600 font-medium">VELOCIDAD</span>
            </div>
          </div>
        </div>

        {/* Live Stream Chart */}
        <div className="h-32 flex items-end gap-0.5">
          {[
            78, 89, 123, 145, 167, 189, 201, 186, 154, 132, 125, 198, 215, 234,
            256, 278, 245, 198, 176, 154, 189, 212, 234, 189, 167, 145, 234,
            256, 289, 234, 189, 167, 145, 123, 198, 276, 298, 321, 343, 389,
            412, 456, 501, 543, 598, 623, 687, 701, 698, 654, 598, 543, 489,
            434, 389, 356, 321, 289, 256, 234, 198, 176, 154, 132, 189, 212,
            234, 256, 278, 289, 301, 298, 289, 278, 256, 234, 212, 189, 167,
            145, 123, 189, 212, 234, 256, 278, 289, 301, 312, 323, 334, 345,
            356, 367, 378, 389, 398, 387, 376, 365, 354, 343, 332, 321, 310,
            299, 288, 277, 266, 255, 244, 233, 222, 211, 198, 187, 176, 165,
            154, 143, 132, 121, 110, 99, 88, 77, 189, 212, 234, 256, 278, 289,
            301, 312, 323, 334, 345, 356, 367, 378, 389, 398, 387, 376, 365,
            354, 343, 332, 321, 310, 299, 288, 277, 266, 255, 244, 233, 222,
          ].map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-200 rounded-t transition-all duration-300 hover:bg-blue-400"
              style={{
                height: `${(value / 700) * 100}%`,
                minWidth: "2px",
              }}
            ></div>
          ))}
        </div>
      </Card>

      <style>{`
        @keyframes flow {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
