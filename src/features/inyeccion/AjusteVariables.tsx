import { Card } from "../../components/ui/card";
import { Settings, AlertCircle } from "lucide-react";
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

export default function AjusteVariables() {
  const [switchMode, setSwitchMode] = useState<
    "position" | "pressure" | "time"
  >("position");

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 5: Inyección - Ajuste de Variables
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Diagnóstico Avanzado
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-green-50 rounded-lg">
          <span className="text-xs font-bold text-green-700 uppercase">
            Sistema Online
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Punto de Conmutación VIP"
          value="15.5"
          unit="mm → 950 bar"
          subtitle="Transferencia por posición"
        />
        <MetricCard
          title="Tiempo de Sostenimiento"
          value="12.40"
          unit="s"
          subtitle="Fase de enfriado activa"
        />
        <MetricCard
          title="Consistencia de Plastificación"
          value="99.2"
          unit="%"
          badge="Estabilizado Óptima"
          subtitle="Estabilizado óptima"
        />
        <MetricCard
          title="Estado del Check Ring"
          value="OK"
          badge="OK"
          badgeColor="bg-green-100 text-green-700"
          subtitle="Sin fugas detectadas"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Check Ring */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Settings className="text-blue-600" size={20} />
              Gemelo Digital de Diagnóstico (Sección 12.3)
            </h3>
            <div className="px-3 py-1 bg-blue-100 rounded-lg">
              <span className="text-xs font-bold text-blue-700 uppercase">
                Salida del Componente: 94%
              </span>
            </div>
          </div>

          {/* Check Ring Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-8">
            <div className="text-center mb-4">
              <p className="text-xs font-bold text-red-600 uppercase">
                Zona de Sellado
              </p>
            </div>

            <div className="relative min-h-[280px] flex items-center justify-center">
              <div className="relative w-full max-w-2xl">
                {/* Screw barrel section */}
                <div className="relative">
                  {/* Barrel */}
                  <div className="relative h-32 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-lg border-2 border-gray-400">
                    {/* Inner screw */}
                    <div className="absolute inset-y-6 left-12 right-24 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg">
                      {/* Check ring (blue section) */}
                      <div className="absolute left-1/3 inset-y-0 w-32 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-lg shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>

                        {/* Check ring label arrow */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                          <div className="text-xs font-bold text-red-600 whitespace-nowrap">
                            22.4 mm
                          </div>
                        </div>
                      </div>

                      {/* Flow direction arrows */}
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-blue-400"></div>
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-blue-400"></div>
                      </div>
                    </div>

                    {/* Nozzle tip */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-16 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 rounded-r-full border-2 border-gray-400">
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute -bottom-12 left-0 right-0 flex justify-around text-xs">
                    <div className="text-center">
                      <p className="font-bold text-blue-600">Check Ring</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-600">Punto de fluido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis details */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                  Análisis de Desgaste
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Juego Radial:{" "}
                  <span className="font-bold text-blue-600">0.08 mm</span>
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                  Estado de Asiento
                </p>
                <p className="text-sm font-medium text-gray-700">
                  <span className="font-bold text-green-600">Mínima</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Switch Configuration */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Configuración de Conmutación
              </h3>
            </div>

            <div className="space-y-4">
              {/* Position */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  switchMode === "position"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSwitchMode("position")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      switchMode === "position"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {switchMode === "position" && (
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Por Posición
                    </p>
                    <p className="text-xs text-gray-500">
                      Control estándar de husillo
                    </p>
                  </div>
                </div>
              </div>

              {/* Pressure */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  switchMode === "pressure"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSwitchMode("pressure")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      switchMode === "pressure"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {switchMode === "pressure" && (
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Por Presión
                    </p>
                    <p className="text-xs text-gray-500">Ajuste de demanda</p>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  switchMode === "time"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSwitchMode("time")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      switchMode === "time"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {switchMode === "time" && (
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Por Tiempo
                    </p>
                    <p className="text-xs text-gray-500">
                      Modo de contingencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Holding Details Table */}
          <Card className="p-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-4">
              Detalles de Sostenimiento (10.3)
            </h3>

            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 pb-2 border-b-2 border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Etapa
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Pres (Bar)
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Tiempo (s)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-900">H1</p>
                <p className="text-sm font-medium text-gray-700">860</p>
                <p className="text-sm font-bold text-blue-600">4.0</p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-900">H2</p>
                <p className="text-sm font-medium text-gray-700">600</p>
                <p className="text-sm font-bold text-blue-600">5.0</p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2">
                <p className="text-sm font-bold text-gray-900">H3</p>
                <p className="text-sm font-medium text-gray-700">560</p>
                <p className="text-sm font-bold text-blue-600">3.4</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Consistency Monitor */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Monitor de Combustistencia (Sección 12.1)
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-blue-500"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Injection Energy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-pink-500"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Plasticization Torque
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-6">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-green-100 rounded-lg text-xs font-bold text-green-700 uppercase">
                Estable/Óptimo
              </span>
            </div>

            <div className="relative h-64">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                {/* Grid */}
                <line
                  x1="50"
                  y1="180"
                  x2="580"
                  y2="180"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="180"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />

                {/* Grid lines */}
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={20 + i * 53.3}
                    x2="580"
                    y2={20 + i * 53.3}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                ))}

                {/* Injection Energy (blue) - stable line */}
                <path
                  d="M 50 90 L 100 88 L 150 92 L 200 89 L 250 91 L 300 90 L 350 88 L 400 92 L 450 89 L 500 91 L 550 90 L 580 89"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* Plasticization Torque (pink) - stable line */}
                <path
                  d="M 50 50 L 100 48 L 150 52 L 200 49 L 250 51 L 300 50 L 350 48 L 400 52 L 450 49 L 500 51 L 550 50 L 580 49"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="3"
                />

                {/* X-axis labels */}
                <text x="80" y="195" fontSize="10" fill="#6b7280">
                  Ciclo 60
                </text>
                <text x="280" y="195" fontSize="10" fill="#6b7280">
                  Ciclo 28
                </text>
                <text x="500" y="195" fontSize="10" fill="#6b7280">
                  Último Ciclo
                </text>
              </svg>
            </div>
          </div>
        </Card>

        {/* Predictive Diagnostics */}
        <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="text-yellow-400" size={20} />
            <h3 className="font-bold text-sm uppercase tracking-wider">
              Diagnóstico Predictivo
            </h3>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase">
                Vida útil del husillo
              </span>
              <span className="text-xl font-bold text-green-400">
                6,450 horas rest.
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-gradient-to-r from-green-500 to-green-400"></div>
            </div>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-blue-400" size={16} />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Basado en el torque actual y el historial de plastificación, se
                estima el próximo mantenimiento preventivo en{" "}
                <span className="font-bold text-white">4 meses</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
