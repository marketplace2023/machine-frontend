import { Card } from "../../components/ui/card";
import { Triangle, CheckCircle, Zap, Settings } from "lucide-react";
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

export default function ControlEtapas() {
  const [vibrationMode, setVibrationMode] = useState(true);
  const [pulseMode, setPulseMode] = useState(false);
  const [sensitivity, setSensitivity] = useState(75);

  // Datos del gráfico de perfil de movimiento
  const profileData = [
    { x: 0, y: 30 },
    { x: 10, y: 45 },
    { x: 20, y: 70 },
    { x: 30, y: 95 },
    { x: 40, y: 100 },
    { x: 50, y: 100 },
    { x: 60, y: 95 },
    { x: 70, y: 82 },
    { x: 80, y: 65 },
    { x: 90, y: 50 },
    { x: 100, y: 35 },
  ];

  const createPath = () => {
    const points = profileData.map(
      (point) => `${point.x * 4.5},${180 - point.y * 1.5}`,
    );
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 3: Eyector (Sistema de Expulsión)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Control de Etapas
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-gray-900 uppercase">
            Servomotor Activo
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Posición Eyector"
          value="45.20"
          unit="mm"
          subtitle="Lectura Encoder Absoluto"
          status="success"
        />
        <MetricCard
          title="Fuerza de Expulsión"
          value="12.8"
          unit="kN"
          subtitle="Carga del Servo 42%"
        />
        <MetricCard
          title="Tiempo de Expulsión"
          value="0.85"
          unit="s"
          subtitle="Dentro de Ciclo"
        />
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-gray-700 uppercase">
              Estado Servomotor
            </p>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">Sistema OK</h3>
          <p className="text-sm font-medium text-green-700">
            Comunicación Ethercat Estable
          </p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Ejection */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Triangle className="text-blue-600" size={20} />
              Gemelo Digital de Expulsión
            </h3>
            <div className="px-3 py-1 bg-blue-100 rounded-lg">
              <span className="text-xs font-bold text-blue-700 uppercase">
                Servo-Driver Plate
              </span>
            </div>
          </div>

          {/* Ejection Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-2xl">
              {/* Ejector Pin Label */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-xs font-bold text-blue-600 uppercase">
                  Placa Eyectora
                </span>
              </div>

              <div className="flex items-center justify-center gap-4">
                {/* Servomotor */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-800 rounded-lg border-2 border-gray-900 shadow-lg relative">
                    <div className="absolute inset-2 bg-gray-700 rounded"></div>
                    <div className="absolute inset-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-8 bg-yellow-400 rounded"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-bold text-gray-800 uppercase">
                    Servomotor
                  </p>
                </div>

                {/* Connection shaft */}
                <div className="w-32 h-2 bg-gray-400 rounded"></div>

                {/* Ejector Plate (Blue - Active) */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-80 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg border-2 border-blue-600 shadow-xl relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>

                    {/* Ejector Pins */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-4 space-y-12">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-4 h-12 bg-gray-300 rounded-sm border border-gray-400"
                        ></div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-700 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Connection to fixed plate */}
                <div className="w-16 h-2 bg-gray-300 rounded"></div>

                {/* Fixed Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-80 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg border-2 border-gray-400 shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-500 rounded-b-lg"></div>
                  </div>
                  <p className="mt-2 text-xs font-bold text-gray-600 uppercase">
                    Placa Fija
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Operation Modes */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Modos de Operación
              </h3>
              <Settings className="text-blue-600" size={18} />
            </div>

            <div className="space-y-4">
              {/* Vibration/Backoff Mode */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Vibración / Sacudida
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Movimiento de piezas complejas
                  </p>
                </div>
                <button
                  onClick={() => setVibrationMode(!vibrationMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    vibrationMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      vibrationMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Pulse Mode */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Pulsos de Expulsión
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Múltiples eyecciones de liberación
                  </p>
                </div>
                <button
                  onClick={() => setPulseMode(!pulseMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    pulseMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      pulseMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card>

          {/* Motor Load Dashboard */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Dashboard de Carga de Motor
              </h3>
              <Zap className="text-blue-600" size={18} />
            </div>

            {/* Torque Gauge */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-gray-100"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                  />
                  {/* 42% */}
                  <circle
                    className="text-blue-600"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    r="70"
                    stroke="currentColor"
                    strokeDasharray="440"
                    strokeDashoffset="255"
                    strokeLinecap="round"
                    strokeWidth="12"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">42%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Nominal
                </p>
                <p className="text-lg font-bold text-gray-900">68%</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Consumo
                </p>
                <p className="text-lg font-bold text-blue-600">1.2 kW</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Límite de torque en tiempo real (%)
            </p>
          </Card>

          {/* Safety Adjustment */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Ajuste de Seguridad
              </h3>
              <div className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                ÓPTIMA
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                Sensibilidad de Obstáculos
              </p>
              <input
                type="range"
                min="0"
                max="100"
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex items-center justify-center mt-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>Baja</span>
                <span>Alta (Muy Crítico)</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Prefiere configurar buscando el punto óptimo según dificultad de
              geometría.
            </p>
          </Card>
        </div>
      </div>

      {/* Motion Profile Graph */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
            Gráfica de Perfil de Movimiento del Eyector
          </h3>
          <div className="flex gap-4 items-center text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <span className="text-gray-600 font-medium">
                Velocidad (mm/s)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Límite Téorico</span>
            </div>
          </div>
        </div>

        {/* Graph Area */}
        <div className="relative w-full h-64 bg-gray-50 rounded-xl border border-gray-200 p-6">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 480 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid */}
            <g stroke="#e5e7eb" strokeWidth="1">
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={(i * 180) / 3}
                  x2="480"
                  y2={(i * 180) / 3}
                />
              ))}
            </g>

            {/* Profile curve */}
            <path
              d={createPath()}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* X-axis labels */}
            <g fill="#6b7280" fontSize="10" fontFamily="sans-serif">
              <text x="0" y="195">
                Home (0 MM)
              </text>
              <text x="200" y="195" textAnchor="middle">
                Etapa 2: Rápida
              </text>
              <text x="360" y="195" textAnchor="middle">
                Etapa 3: Lenta
              </text>
              <text x="460" y="195" textAnchor="end">
                Fin Carrera (320 MM)
              </text>
            </g>
          </svg>
        </div>
      </Card>
    </div>
  );
}
