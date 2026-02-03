import { Card } from "../../components/ui/card";
import { Activity, Info } from "lucide-react";
import { useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  badge,
  badgeColor = "bg-green-100 text-green-700",
}: MetricCardProps) {
  return (
    <Card className="p-6">
      <p className="text-xs font-bold text-gray-500 uppercase mb-2">{title}</p>
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        {unit && (
          <span className="text-lg font-medium text-gray-600">{unit}</span>
        )}
        {badge && (
          <span
            className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${badgeColor}`}
          >
            {badge}
          </span>
        )}
      </div>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </Card>
  );
}

export default function PerfilesGraficas() {
  const [servoCompensation, setServoCompensation] = useState(true);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 5: Inyección (Llenado y Sostenimiento)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Control de Presión
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-lg">
          <span className="text-xs font-bold text-blue-700 uppercase">
            Servo Motor OK
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Posición Husillo"
          value="45.20"
          unit="mm"
          subtitle="Frente de carga"
        />
        <MetricCard
          title="Presión de Inyección"
          value="1,245"
          unit="bar"
          badge="Estabilizado"
          badgeColor="bg-red-100 text-red-700"
        />
        <MetricCard
          title="Velocidad Actual"
          value="85.0"
          unit="mm/s"
          subtitle="Perfil Etapa 3"
        />
        <MetricCard
          title="Tiempo de Llenado"
          value="2.14"
          unit="s"
          subtitle="Variación: +0.025"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Injection Unit */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Activity className="text-blue-600" size={20} />
              Gemelo Digital de Inyección
            </h3>
            <div className="px-3 py-1 bg-green-100 rounded-lg">
              <span className="text-xs font-bold text-green-700 uppercase">
                Inyectando Material
              </span>
            </div>
          </div>

          {/* Screw Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-8">
            <div className="text-center mb-4">
              <p className="text-xs font-bold text-gray-600 uppercase">
                Unidad de Inyección (Ilustración 5.1A)
              </p>
            </div>

            <div className="relative min-h-[300px] flex items-center justify-center">
              {/* Barrel housing */}
              <div className="relative w-full max-w-4xl">
                {/* Barrel outer shell */}
                <div className="relative h-32 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-lg border-2 border-gray-400 shadow-lg">
                  {/* Barrel zones shading */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-gray-100/50 to-orange-100/50 rounded-lg"></div>

                  {/* Screw inside barrel */}
                  <div className="absolute inset-y-4 left-8 right-16 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-lg shadow-inner">
                    {/* Screw threads representation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>

                    {/* Screw flights (diagonal lines) */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-full w-8 bg-gradient-to-r from-blue-600 to-transparent transform -skew-x-45"
                          style={{
                            left: `${i * 12}%`,
                            opacity: 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Nozzle tip */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-r-full border-2 border-gray-400">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Position markers */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-8 text-xs font-bold text-gray-600">
                  <span className="text-orange-600">0</span>
                  <span>90</span>
                  <span className="text-orange-600">120mm</span>
                </div>

                {/* Position indicator arrow */}
                <div className="absolute -bottom-12 left-24 flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-red-600"></div>
                  <div className="text-xs font-bold text-red-600 whitespace-nowrap mt-1">
                    45.20mm (Actual)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Holding Profile */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Control de Sostenimiento
            </h3>
            <Info className="text-blue-600" size={18} />
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase mb-3">
              Holding Profile (Sección 10.3)
            </p>
          </div>

          {/* Holding pressure graph */}
          <div className="relative bg-gray-50 rounded-lg border border-gray-200 p-4 h-64">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              {/* Grid lines */}
              <line
                x1="40"
                y1="180"
                x2="280"
                y2="180"
                stroke="#e5e7eb"
                strokeWidth="2"
              />
              <line
                x1="40"
                y1="20"
                x2="40"
                y2="180"
                stroke="#e5e7eb"
                strokeWidth="2"
              />

              {/* Holding profile path */}
              <path
                d="M 40 40 L 80 40 L 120 80 L 180 90 L 240 160 L 280 165"
                fill="none"
                stroke="#f97316"
                strokeWidth="3"
              />

              {/* Stage markers */}
              <circle cx="80" cy="40" r="4" fill="#f97316" />
              <circle cx="120" cy="80" r="4" fill="#f97316" />
              <circle cx="180" cy="90" r="4" fill="#f97316" />

              {/* Labels */}
              <text
                x="75"
                y="30"
                fontSize="10"
                fill="#374151"
                fontWeight="bold"
              >
                820 bar
              </text>
              <text
                x="115"
                y="70"
                fontSize="10"
                fill="#374151"
                fontWeight="bold"
              >
                620 bar
              </text>
            </svg>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
              <span className="text-xs font-bold text-gray-700 uppercase">
                Tiempo Total
              </span>
              <span className="text-sm font-bold text-orange-700">8.50 s</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
              <span className="text-xs font-bold text-gray-700 uppercase">
                Presión Pico
              </span>
              <span className="text-sm font-bold text-blue-700">820 bar</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Multi-stage Profile Graph */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6">
            Gráfica de Perfil Multietapa (Sección 10.1 - 10.2)
          </h3>

          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-6">
            {/* Legend */}
            <div className="flex items-center justify-end gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-orange-500"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Velocidad
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-green-500"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Presión
                </span>
              </div>
              <div className="px-2 py-1 bg-yellow-100 rounded text-xs font-bold text-yellow-700 uppercase">
                Golden Curve
              </div>
            </div>

            {/* Graph */}
            <div className="relative h-80">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid */}
                <line
                  x1="50"
                  y1="280"
                  x2="580"
                  y2="280"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="280"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />

                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={20 + i * 65}
                    x2="580"
                    y2={20 + i * 65}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                ))}

                {/* Velocity curve (orange) */}
                <path
                  d="M 50 40 L 150 45 L 250 80 L 350 140 L 450 220 L 550 270"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                />

                {/* Pressure curve (green) */}
                <path
                  d="M 50 270 L 150 250 L 250 200 L 350 120 L 450 60 L 550 30 L 580 270"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Inicio marker */}
                <circle cx="150" cy="45" r="5" fill="#ef4444" />
                <text
                  x="155"
                  y="35"
                  fontSize="11"
                  fill="#ef4444"
                  fontWeight="bold"
                >
                  Inicio
                </text>

                {/* X-axis labels */}
                <text x="40" y="295" fontSize="10" fill="#6b7280">
                  Posición Husillo (mm)
                </text>
                <text x="50" y="295" fontSize="10" fill="#6b7280">
                  0
                </text>
                <text x="200" y="295" fontSize="10" fill="#6b7280">
                  100
                </text>
                <text x="350" y="295" fontSize="10" fill="#6b7280">
                  150
                </text>
                <text x="500" y="295" fontSize="10" fill="#6b7280">
                  200
                </text>
              </svg>
            </div>
          </div>
        </Card>

        {/* Right Panel - Precision Configuration */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Configuración de Precisión
              </h3>
            </div>

            <div className="space-y-6">
              {/* Servo Inertia Control */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">
                      Control de Inercia Servo
                    </p>
                    <p className="text-xs text-gray-500">
                      Compensación de frenado
                    </p>
                  </div>
                  <button
                    onClick={() => setServoCompensation(!servoCompensation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      servoCompensation ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        servoCompensation ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Safety Pressure Limit */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase mb-3">
                  Límite de Presión de Seguridad
                </p>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value="1800"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900 font-bold"
                    readOnly
                  />
                  <span className="text-sm font-bold text-gray-700">bar</span>
                </div>
              </div>
            </div>
          </Card>

          {/* VIP Transfer */}
          <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-gray-700 uppercase">
                  Transferencia VIP
                </p>
                <Info className="text-teal-600" size={16} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Modo: Posición</span>
                <span className="text-lg font-bold text-teal-700">12.5 mm</span>
              </div>
            </div>
          </Card>

          {/* Cushion Time */}
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-700 uppercase">
                Tiempo de Cojín
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Duración actual</span>
                <span className="text-lg font-bold text-amber-700">
                  4.20 mm
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
