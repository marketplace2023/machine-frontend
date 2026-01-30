import { Card } from "../../components/ui/card";
import {
  RotateCcw,
  Search,
  Shield,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle?: string;
  status?: "success" | "warning" | "neutral";
  statusText?: string;
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  status = "neutral",
  statusText,
}: MetricCardProps) {
  const statusColors = {
    success: "text-green-600",
    warning: "text-orange-600",
    neutral: "text-gray-600",
  };

  return (
    <Card className="p-6">
      <p className="text-xs font-bold text-gray-500 uppercase mb-2">{title}</p>
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <span className="text-lg font-medium text-gray-600">{unit}</span>
      </div>
      {statusText && (
        <p className={`text-sm font-medium ${statusColors[status]}`}>
          {statusText}
        </p>
      )}
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </Card>
  );
}

export default function PerfilApertura() {
  // Datos simulados para el gráfico
  const velocityData = [
    { time: 0, value: 50 },
    { time: 0.5, value: 150 },
    { time: 1, value: 180 },
    { time: 1.5, value: 160 },
    { time: 2, value: 140 },
    { time: 2.5, value: 150 },
    { time: 3, value: 140 },
    { time: 3.5, value: 90 },
    { time: 4, value: 60 },
    { time: 4.5, value: 40 },
    { time: 5, value: 30 },
  ];

  const positionData = [
    { time: 0, value: 10 },
    { time: 0.5, value: 30 },
    { time: 1, value: 60 },
    { time: 1.5, value: 95 },
    { time: 2, value: 130 },
    { time: 2.5, value: 160 },
    { time: 3, value: 185 },
    { time: 3.5, value: 205 },
    { time: 4, value: 220 },
    { time: 4.5, value: 230 },
    { time: 5, value: 240 },
  ];

  const currentTime = 3.0; // Línea vertical roja

  // Función para convertir datos a coordenadas SVG
  const toPath = (
    data: { time: number; value: number }[],
    maxValue: number,
  ) => {
    const width = 500;
    const height = 180;
    const points = data.map((point) => {
      const x = (point.time / 5) * width;
      const y = height - (point.value / maxValue) * height;
      return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Unidad de Cierre</h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Perfil de Apertura y Cierre
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-gray-900 uppercase">
            Ciclo en Proceso
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Fuerza de Cierre"
          value="1250.4"
          unit="kN"
          status="success"
          statusText="Estable (-0.2%)"
        />
        <MetricCard title="Posición Actual" value="452.28" unit="mm" />
        <MetricCard
          title="Tiempo de Ciclo"
          value="2.84"
          unit="s"
          subtitle="Último: 2.85s"
        />
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-gray-700 uppercase">
              Seguridad
            </p>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">Activo</h3>
          <p className="text-sm font-medium text-green-700">Umbral: 15.0%</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Kinematics */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <RotateCcw className="text-blue-600" size={20} />
              Gemelo Digital de Cinemática
            </h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <RotateCcw size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Kinematic Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-lg">
              {/* Position Indicator */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-blue-600">
                    452.28 mm
                  </span>
                  <div className="w-px h-6 bg-blue-600"></div>
                </div>
              </div>

              {/* Plates Visualization */}
              <div className="flex items-center justify-center gap-8 pt-8">
                {/* Fixed Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-64 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg border-2 border-gray-400 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-500"></div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-gray-600 uppercase">
                    Placa Fija
                  </p>
                </div>

                {/* Distance Indicator */}
                <div className="flex flex-col items-center justify-center">
                  <div className="h-px w-20 bg-blue-400 relative">
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                {/* Mobile Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-64 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg border-2 border-blue-600 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"></div>
                    {/* Motion indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-blue-700 uppercase">
                    Placa Móvil
                  </p>
                </div>
              </div>

              {/* Rail/Guide */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="w-full h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Safety and Servomotor Load */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Seguridad de Molde
            </h3>
            <Shield className="text-green-600" size={20} />
          </div>

          {/* Torque Gauge */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  className="text-gray-100"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                ></circle>
                {/* Progress circle - 70% of 283 = 198 */}
                <circle
                  className="text-green-500"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="440"
                  strokeDashoffset="132"
                  strokeLinecap="round"
                  strokeWidth="12"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">4.2</span>
                <span className="text-xs text-gray-500 uppercase font-bold mt-1">
                  Torque (Nm)
                </span>
              </div>
            </div>
          </div>

          {/* Servomotor Load */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-gray-500 uppercase">
                Carga Servomotor
              </p>
              <p className="text-2xl font-bold text-gray-900">38%</p>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: "38%" }}
              ></div>
            </div>
          </div>

          {/* AI Optimization Button */}
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-bold text-sm uppercase tracking-wide">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-xs">i</span>
            </div>
            Optimización AI
          </button>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs font-bold text-blue-900 mb-2">
              Estado del Sistema
            </p>
            <div className="space-y-1 text-xs text-blue-700">
              <div className="flex justify-between">
                <span>Ciclos Hoy:</span>
                <span className="font-bold">1,847</span>
              </div>
              <div className="flex justify-between">
                <span>Eficiencia:</span>
                <span className="font-bold text-green-700">96.4%</span>
              </div>
              <div className="flex justify-between">
                <span>Temp. Molde:</span>
                <span className="font-bold">45°C</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Motion Profile Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
            <TrendingUp className="text-blue-600" size={20} />
            Perfil de Movimiento
          </h3>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-500"></div>
              <span className="text-xs font-medium text-gray-600">
                Velocidad (mm/s)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-green-500"></div>
              <span className="text-xs font-medium text-gray-600">
                Posición (mm)
              </span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative w-full h-64 bg-gray-50 rounded-xl border border-gray-200 p-6">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 520 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid lines */}
            <g stroke="#e5e7eb" strokeWidth="1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line
                  key={`v-${i}`}
                  x1={(i * 520) / 5}
                  y1="0"
                  x2={(i * 520) / 5}
                  y2="180"
                />
              ))}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={(i * 180) / 3}
                  x2="520"
                  y2={(i * 180) / 3}
                />
              ))}
            </g>

            {/* Position line (green) */}
            <path
              d={toPath(positionData, 250)}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Velocity line (blue) */}
            <path
              d={toPath(velocityData, 200)}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Current time indicator (red dashed line) */}
            <line
              x1={(currentTime / 5) * 520}
              y1="0"
              x2={(currentTime / 5) * 520}
              y2="180"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* X-axis labels */}
            <g fill="#6b7280" fontSize="12" fontFamily="monospace">
              <text x="0" y="195">
                0.0S
              </text>
              <text x="100" y="195">
                1.0S
              </text>
              <text x="200" y="195">
                2.0S
              </text>
              <text x="300" y="195">
                3.0S
              </text>
              <text x="400" y="195">
                4.0S
              </text>
              <text x="500" y="195">
                5.0S
              </text>
            </g>
          </svg>
        </div>

        {/* Time and values display */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xs font-bold text-blue-600 uppercase mb-1">
              Tiempo Actual
            </p>
            <p className="text-lg font-bold text-gray-900">
              {currentTime.toFixed(2)}s
            </p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xs font-bold text-blue-600 uppercase mb-1">
              Velocidad
            </p>
            <p className="text-lg font-bold text-gray-900">140 mm/s</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xs font-bold text-green-600 uppercase mb-1">
              Posición
            </p>
            <p className="text-lg font-bold text-gray-900">185 mm</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
