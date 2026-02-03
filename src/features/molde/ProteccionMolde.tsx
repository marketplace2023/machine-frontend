import { Card } from "../../components/ui/card";
import { Shield, TrendingUp, Settings, Droplets } from "lucide-react";
import { useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle?: string;
  status?: "success" | "warning" | "neutral";
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  status = "neutral",
}: MetricCardProps) {
  return (
    <Card className="p-6">
      <p className="text-xs font-bold text-gray-500 uppercase mb-2">{title}</p>
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <span className="text-lg font-medium text-gray-600">{unit}</span>
      </div>
      {subtitle && (
        <p
          className={`text-xs font-medium ${
            status === "success" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Card>
  );
}

export default function ProteccionMolde() {
  const [sensitivity, setSensitivity] = useState(75);

  // Datos del gráfico de torque
  const torqueData = [
    { x: 0, y: 35 },
    { x: 10, y: 38 },
    { x: 20, y: 42 },
    { x: 30, y: 48 },
    { x: 40, y: 55 },
    { x: 50, y: 65 },
    { x: 60, y: 78 },
    { x: 70, y: 88 },
    { x: 80, y: 95 },
    { x: 90, y: 92 },
    { x: 100, y: 85 },
  ];

  const createPath = () => {
    const points = torqueData.map(
      (point) => `${point.x * 5},${180 - point.y * 1.6}`,
    );
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 2: Molde (Unidad de Cierre)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Protección y Torque
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
          value="1250"
          unit="kN"
          subtitle="Presión Nominal Alcanzada"
          status="success"
        />
        <MetricCard
          title="Posición Actual"
          value="325.40"
          unit="mm"
          subtitle="Sensor Óptico Preciso"
        />
        <MetricCard
          title="Monitor de Torque"
          value="18.5"
          unit="Nm"
          subtitle="Dentro de Tolerancia"
        />
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-gray-700 uppercase">
              Estado de Seguridad
            </p>
            <Shield className="text-green-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">Sistema OK</h3>
          <p className="text-sm font-medium text-green-700">
            Protección Activa
          </p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Protection */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Shield className="text-blue-600" size={20} />
              Gemelo Digital de Protección
            </h3>
            <div className="px-3 py-1 bg-orange-100 rounded-lg">
              <span className="text-xs font-bold text-orange-700 uppercase">
                Heatmap de Contacto
              </span>
            </div>
          </div>

          {/* Protection Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-2xl">
              <div className="flex items-center justify-center gap-8">
                {/* Fixed Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-80 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg border-2 border-gray-400 shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-500 rounded-b-lg"></div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-gray-600 uppercase">
                    Placa Fija
                  </p>
                </div>

                {/* Contact Zone with Heat */}
                <div className="relative">
                  {/* Heat Zone */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-40 h-48 bg-gradient-to-r from-orange-200 via-orange-300 to-transparent opacity-60 rounded-lg blur-xl"></div>

                  {/* Torque Sensors */}
                  <div className="relative z-10 space-y-16">
                    {/* Top Sensor */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                      <div className="flex items-center">
                        <div className="w-16 h-0.5 bg-red-500"></div>
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-red-500"></div>
                      </div>
                      <span className="text-xs font-bold text-red-600 whitespace-nowrap">
                        SENSOR TORQUE
                      </span>
                    </div>

                    {/* Bottom Sensor */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="flex items-center">
                        <div className="w-16 h-0.5 bg-red-500"></div>
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-red-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-80 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg border-2 border-gray-300 shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400 rounded-b-lg"></div>
                    {/* Contact indicator */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-48 bg-gradient-to-r from-orange-400 to-transparent"></div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-blue-600 uppercase">
                    Placa Móvil (Zona de Carga)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Monitoring */}
        <div className="space-y-6">
          {/* Lubrication Monitor */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Monitor de Lubricación (Sección 3.3)
              </h3>
              <Droplets className="text-blue-500" size={18} />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Lubricación de Rodilleras
                </span>
                <span className="text-2xl font-bold text-gray-900">85%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Promedio Ciclo
                </span>
                <span className="text-lg font-bold text-gray-900">
                  142 / 500
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: "28%" }}
                />
              </div>
            </div>
          </Card>

          {/* Force Dashboard */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Dashboard de Fuerza (Sección 2.2)
              </h3>
              <TrendingUp className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase mb-3">
                Historial de Torque (kN)
              </p>
              <div className="flex items-end justify-between h-24 gap-1">
                {[40, 45, 42, 48, 44, 90].map((height, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t transition-all ${
                      i === 5 ? "bg-blue-600" : "bg-gray-200"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                <span>C-6</span>
                <span className="text-blue-600 font-bold">ACTUAL</span>
              </div>
            </div>
          </Card>

          {/* Sensitivity Adjustment */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Ajuste de Sensibilidad
              </h3>
              <Settings className="text-gray-500" size={18} />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Nivel de Protección
                </span>
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                  ALTO
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>Mínima (SAFE)</span>
                <span>Máxima (SAFE)</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Una mayor sensibilidad detecta obstrucciones más pequeñas pero
              puede generar falsas alarmas por vibraciones láminas.
            </p>
          </Card>
        </div>
      </div>

      {/* Torque Graph */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
            <TrendingUp className="text-blue-600" size={20} />
            Gráfica de Monitoreo de Torque en Tiempo Real
          </h3>
          <div className="flex gap-4 items-center text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <span className="text-gray-600 font-medium">Torque Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-orange-500 rounded-full"></div>
              <span className="text-gray-600 font-medium">Golden Curve</span>
            </div>
          </div>
        </div>

        {/* Graph Area */}
        <div className="relative w-full h-64 bg-gray-50 rounded-xl border border-gray-200 p-6">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 520 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid */}
            <g stroke="#e5e7eb" strokeWidth="1">
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={(i * 180) / 4}
                  x2="520"
                  y2={(i * 180) / 4}
                />
              ))}
            </g>

            {/* Torque curve */}
            <path
              d={createPath()}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Current point marker */}
            <circle
              cx="400"
              cy="28"
              r="6"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x="400"
              y="20"
              fill="#3b82f6"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              18.5 Nm
            </text>

            {/* X-axis labels */}
            <g fill="#6b7280" fontSize="10" fontFamily="sans-serif">
              <text x="0" y="195">
                Inicio Carrera (0 MM)
              </text>
              <text x="220" y="195" textAnchor="middle">
                Punto de Seguridad
              </text>
              <text x="480" y="195" textAnchor="end">
                Fin de Cierre (325.40 MM)
              </text>
            </g>
          </svg>
        </div>
      </Card>
    </div>
  );
}
