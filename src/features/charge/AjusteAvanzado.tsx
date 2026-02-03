import { Card } from "../../components/ui/card";
import { Settings, RefreshCw } from "lucide-react";
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

export default function AjusteAvanzado() {
  const [syncWithMold, setSyncWithMold] = useState(true);
  const [accelRamp, setAccelRamp] = useState("standard");

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 6: Charge (Plastificación)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Configuración Avanzada
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
          title="Contrapresión Dinámica"
          value="14.2"
          unit="bar"
          progressBar={true}
          progressValue={35}
        />
        <MetricCard
          title="Límite de Torque de Carga"
          value="85"
          unit="%"
          subtitle="Protección de husillo OK"
        />
        <MetricCard
          title="Retraso de Carga"
          value="0.50"
          unit="s"
          subtitle="Conseguiendo marginal"
        />
        <MetricCard
          title="Estado de Sincronización"
          value="Activo"
          badge="Cargara en paralelo"
          badgeColor="bg-green-100 text-green-700"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Process */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Settings className="text-blue-600" size={20} />
              Gemelo Digital de Proceso
            </h3>
          </div>

          {/* Screw Process Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-8">
            <div className="relative min-h-[280px] flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex items-center gap-4">
                  {/* Screw barrel with zones */}
                  <div className="flex-1">
                    {/* Labels above */}
                    <div className="flex justify-between mb-2 text-xs font-bold text-gray-600">
                      <span>Descompresión 1</span>
                      <span>Descompresión 2</span>
                    </div>

                    {/* Barrel */}
                    <div className="relative h-28 bg-gradient-to-b from-amber-100 via-gray-100 to-amber-100 rounded-lg border-2 border-gray-300 shadow-lg">
                      {/* Screw inside */}
                      <div className="absolute inset-y-4 left-4 right-4">
                        {/* Screw body with flights */}
                        <div className="relative h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg">
                          {/* Screw flights pattern */}
                          <div className="absolute inset-0 flex items-center">
                            {[...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="h-full w-1 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 mx-0.5"
                                style={{
                                  opacity: i % 2 === 0 ? 0.8 : 0.4,
                                  height: `${60 + (i % 3) * 10}%`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Zone markers */}
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span className="text-orange-600 font-bold">Zona 1</span>
                      <span className="font-bold">Zona 2</span>
                    </div>
                  </div>

                  {/* Motor drive */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-xl flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-gray-700 mt-2 uppercase">
                      Servo Drive
                    </p>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-blue-700">
                      Descompresión
                    </span>{" "}
                    - Retroceso programado del husillo para evitar el goteo del
                    material fundido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Decompression Config */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Configuración de Descompresión
            </h3>
          </div>

          <div className="space-y-6">
            {/* Suck-back 1 */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase mb-3">
                Antes de carga (Suck-back 1)
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Velocidad (mm/s)
                  </p>
                  <input
                    type="number"
                    value="10.5"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Precisión (mm)
                  </p>
                  <input
                    type="number"
                    value="0.01"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Acceleration Ramp */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                Rampa de Aceleración
              </p>
              <select
                value={accelRamp}
                onChange={(e) => setAccelRamp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
              >
                <option value="standard">Estándar (0.1s)</option>
                <option value="slow">Suave (0.2s)</option>
                <option value="fast">Rápida (0.05s)</option>
              </select>
            </div>

            {/* Suck-back 2 */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-bold text-blue-600 uppercase mb-3">
                Después de carga (Suck-back 2)
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Velocidad (mm/s)
                  </p>
                  <input
                    type="number"
                    value="18.0"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Posición (mm)
                  </p>
                  <input
                    type="number"
                    value="3.5"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Dynamic Back-pressure Panel */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Panel de Contrapresión Dinámica (Sección 11.2)
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-blue-500"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Presión Real
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-gray-400"></div>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Set Point
                </span>
              </div>
            </div>
          </div>

          {/* Graph */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">
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
                {/* Pressure curve (blue) */}
                <path
                  d="M 50 80 L 150 80 L 250 110 L 350 110 L 450 140 L 550 145"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* X-axis labels */}
                <text x="80" y="195" fontSize="10" fill="#6b7280">
                  0 mm
                </text>
                <text x="280" y="195" fontSize="10" fill="#6b7280">
                  30 mm
                </text>
                <text x="500" y="195" fontSize="10" fill="#6b7280">
                  60 mm
                </text>
              </svg>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">
                    Punto
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">
                    Pos (mm)
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">
                    Pres (bar)
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">
                    Rampa/h
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { punto: 1, pos: 0.5, pres: 15.0, rampa: "Lineal" },
                  { punto: 2, pos: 20.0, pres: 10.0, rampa: "Lineal" },
                  { punto: 3, pos: 45.0, pres: 8.0, rampa: "S-Curve" },
                ].map((row) => (
                  <tr
                    key={row.punto}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-3 text-sm font-bold text-gray-900">
                      {row.punto}
                    </td>
                    <td className="py-3 px-3 text-sm text-gray-700">
                      {row.pos}
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-blue-600">
                      {row.pres}
                    </td>
                    <td className="py-3 px-3 text-sm text-gray-700">
                      {row.rampa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Right Panel - Parallel Sync */}
        <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="flex items-center gap-2 mb-6">
            <RefreshCw className="text-yellow-400" size={20} />
            <h3 className="font-bold text-xs uppercase tracking-wider">
              Sincronización en Paralelo (11.4)
            </h3>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-bold text-white mb-1">
                  Carga con Apertura de Molde
                </p>
                <p className="text-xs text-gray-400">Longitud de Husado</p>
              </div>
              <button
                onClick={() => setSyncWithMold(!syncWithMold)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  syncWithMold ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    syncWithMold ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-xs font-bold text-gray-400 uppercase mb-3">
              Log de requerimientos auxiliares
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xs text-gray-300">
                  Apertura Molde:{" "}
                  <span className="font-bold text-green-400">
                    EJECUTÁNDOSE...
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xs text-gray-300">
                  Carga Plastificación:{" "}
                  <span className="font-bold text-green-400">
                    EJECUTÁNDOSE...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
