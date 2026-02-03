import { Card } from "../../components/ui/card";
import { Zap, Wrench } from "lucide-react";
import { useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  progressBar?: boolean;
  progressValue?: number;
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  badge,
  badgeColor = "bg-green-100 text-green-700",
  progressBar = false,
  progressValue = 0,
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
      {progressBar && (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
          <div
            className="h-full bg-blue-600"
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>
      )}
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </Card>
  );
}

export default function MovimientoFuerza() {
  const [sprueMode, setSprueMode] = useState<
    "off" | "afterInjection" | "afterCharge"
  >("afterInjection");
  const [retractionDistance, setRetractionDistance] = useState(25.0);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 7: Boquilla (Nozzle)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Control de Carro
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
          title="Posición del Carro"
          value="452.8"
          unit="mm"
          progressBar={true}
          progressValue={85}
        />
        <MetricCard
          title="Fuerza de Contacto"
          value="35.5"
          unit="kN"
          subtitle="Contacto reversible"
        />
        <MetricCard
          title="Temperatura Punta"
          value="235"
          unit="°C"
          subtitle="Zona 1 (Boquilla)"
        />
        <MetricCard
          title="Estado de Sellado"
          value="OK"
          badge="OK"
          badgeColor="bg-green-100 text-green-700"
          subtitle="Presión de contacto estable"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Nozzle */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Zap className="text-blue-600" size={20} />
              Gemelo Digital de Boquilla
            </h3>
          </div>

          {/* Nozzle Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-8 flex items-center justify-center min-h-[300px]">
            <div className="w-full max-w-2xl">
              <div className="flex items-center justify-center gap-4">
                {/* Mold face */}
                <div className="relative">
                  <div className="w-24 h-48 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-lg border-2 border-gray-400 shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-b from-gray-100 to-gray-50 rounded"></div>
                  </div>
                  <p className="text-xs font-bold text-gray-600 mt-2 text-center uppercase">
                    Plato Fijo/Molde
                  </p>
                </div>

                {/* Nozzle tip */}
                <div className="relative flex items-center">
                  {/* Nozzle body */}
                  <div className="relative">
                    <div className="w-48 h-20 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-r-lg border-2 border-blue-700 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-r-lg"></div>
                      {/* Heating bands */}
                      <div className="absolute inset-y-2 left-4 right-4 border-t border-b border-yellow-400 opacity-50"></div>
                    </div>

                    {/* Nozzle tip (cone) */}
                    <div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "40px solid transparent",
                        borderBottom: "40px solid transparent",
                        borderRight: "32px solid #3b82f6",
                      }}
                    ></div>

                    {/* Contact indicator */}
                    <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Carriage system */}
                  <div className="ml-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg border-2 border-gray-800 shadow-lg flex items-center justify-center">
                      <p className="text-xs font-bold text-white text-center uppercase">
                        Sistema de
                        <br />
                        Carro
                      </p>
                    </div>
                  </div>
                </div>

                {/* Force arrow */}
                <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center gap-2">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-12 border-r-yellow-500"></div>
                    <p className="text-xs font-bold text-yellow-600 whitespace-nowrap">
                      35.5 kN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Sprue Break */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Zap className="text-blue-600" size={16} />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Sección 13.3: Modos de Sprue Break
              </h3>
            </div>

            <div className="space-y-4">
              {/* Off */}
              <div
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  sprueMode === "off"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSprueMode("off")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sprueMode === "off"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {sprueMode === "off" && (
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Off</p>
                    <p className="text-xs text-gray-500">(Sin retroceso)</p>
                  </div>
                </div>
              </div>

              {/* After Injection */}
              <div
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  sprueMode === "afterInjection"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSprueMode("afterInjection")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sprueMode === "afterInjection"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {sprueMode === "afterInjection" && (
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Después de Inyección
                    </p>
                  </div>
                </div>
              </div>

              {/* After Charge */}
              <div
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  sprueMode === "afterCharge"
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSprueMode("afterCharge")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sprueMode === "afterCharge"
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {sprueMode === "afterCharge" && (
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Después de Carga
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Retraction Distance Slider */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Distancia de Retroceso (mm)
                </p>
                <span className="text-sm font-bold text-blue-600">
                  {retractionDistance.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="0.5"
                value={retractionDistance}
                onChange={(e) =>
                  setRetractionDistance(parseFloat(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </Card>

          {/* Timers */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Wrench className="text-purple-600" size={16} />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Sección 14.1: Temporizadores
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Delay at Start
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value="0.50"
                    step="0.01"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                  <span className="text-sm font-medium text-gray-600">s</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Contact Maint. Time
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value="3.60"
                    step="0.01"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                  <span className="text-sm font-medium text-gray-600">s</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Movement Control Table */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Control de Movimiento y Fuerza
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Avance
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Retroceso
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">
                    Etapa de Movimiento
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">
                    Velocidad (mm/s)
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">
                    Posición (mm)
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">
                    Lim. Fuerza (kN)
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-bold text-gray-900">
                    Aproximación Rápida
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">160</td>
                  <td className="py-3 px-4 text-sm text-gray-700">400.0</td>
                  <td className="py-3 px-4 text-sm text-gray-700">5.0</td>
                  <td className="py-3 px-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 bg-green-50">
                  <td className="py-3 px-4 text-sm font-bold text-gray-900">
                    Contacto Final
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">25</td>
                  <td className="py-3 px-4 text-sm text-gray-700">452.0</td>
                  <td className="py-3 px-4 text-sm font-bold text-blue-600">
                    40.0
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-bold text-gray-900">
                    Retroceso Sprue Break
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">80</td>
                  <td className="py-3 px-4 text-sm text-gray-700">430.0</td>
                  <td className="py-3 px-4 text-sm text-gray-700">10.0</td>
                  <td className="py-3 px-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Maintenance Panel */}
        <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="text-yellow-400" size={20} />
            <h3 className="font-bold text-xs uppercase tracking-wider">
              Sección 14.5: Mantenimiento
            </h3>
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase">
                Lubricación del carro
              </span>
              <span className="text-sm font-bold text-green-400">Nivel OK</span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-green-400"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
