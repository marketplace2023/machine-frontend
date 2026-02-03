import { Card } from "../../components/ui/card";
import { BarChart3, Zap } from "lucide-react";
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

export default function ControlCarga() {
  const [syncParallel, setSyncParallel] = useState(true);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 6: Charge - Control de Carga
          </h1>
          <p className="text-sm text-green-600 font-medium uppercase tracking-wide mt-1">
            Dosificación Activa
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
          title="Posición Actual"
          value="42.85"
          unit="mm"
          subtitle="Recorrido de dosificación"
        />
        <MetricCard
          title="Velocidad de Giro"
          value="120"
          unit="RPM"
          subtitle="Motor eléctrico activo"
        />
        <MetricCard
          title="Contrapresión Eléctrica"
          value="12.5"
          unit="bar"
          badge="Carga controlada"
        />
        <MetricCard
          title="Tiempo de Carga"
          value="3.42"
          unit="s"
          subtitle="Ciclo estable"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Plasticizing */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <BarChart3 className="text-blue-600" size={20} />
              Gemelo Digital de Plastificación
            </h3>
          </div>

          {/* Screw Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-8 flex items-center justify-center min-h-[200px]">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col items-center">
                {/* Screw with zones */}
                <div className="w-full h-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg border-2 border-gray-400 flex items-center relative">
                  {/* Screw flights */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-8 flex items-center">
                    {[...Array(18)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-2 bg-gradient-to-b from-gray-400 to-gray-300 mx-0.5 rounded"
                        style={{ opacity: i % 3 === 0 ? 0.7 : 0.3 }}
                      />
                    ))}
                  </div>
                  {/* Flow arrow */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-blue-400"></div>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-2 text-xs font-bold text-gray-500">
                  <span>Alimentación</span>
                  <span>Fusión y Compresión</span>
                  <span>Dosificación</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Dosification Stages */}
        <Card className="p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-4">
            Panel de Etapas de Dosificación
          </h3>
          <div className="space-y-2">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-2 pb-2 border-b-2 border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase">Etapa</p>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Pos (mm)
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase">RPM</p>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Pres (bar)
              </p>
            </div>
            {/* Table rows */}
            {[
              { etapa: "S1", pos: 15.0, rpm: 140, pres: 15.0 },
              { etapa: "S2", pos: 30.0, rpm: 130, pres: 13.0 },
              { etapa: "S3", pos: 45.0, rpm: 120, pres: 10.0 },
              { etapa: "S4", pos: 55.0, rpm: 100, pres: 8.0 },
              { etapa: "S5", pos: 60.0, rpm: 80, pres: 5.0 },
            ].map((row) => (
              <div
                key={row.etapa}
                className="grid grid-cols-4 gap-2 py-1 border-b border-gray-100 text-xs"
              >
                <p className="font-bold text-gray-900">{row.etapa}</p>
                <p>{row.pos}</p>
                <p className="text-blue-600 font-bold">{row.rpm}</p>
                <p>{row.pres}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charge Profile Graph */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6">
            Gráfica de Perfil de Carga (Sección 11.1 - 11.2)
          </h3>
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-6">
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
                {/* RPM (blue) */}
                <path
                  d="M 50 60 L 150 60 L 250 80 L 350 120 L 450 160 L 550 180"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />
                {/* Back-pressure (green) */}
                <path
                  d="M 50 180 L 150 160 L 250 140 L 350 120 L 450 100 L 550 80"
                  fill="none"
                  stroke="#10b981"
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
                  60 mm (Fin de carga)
                </text>
              </svg>
            </div>
          </div>
        </Card>

        {/* Right Panel - Suck-back & Sync */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-4">
              Descompresión / Suck-back (11.3)
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-gray-700">Antes de carga</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <p className="text-xs text-gray-500">Vel. (mm/s)</p>
                  <input
                    type="number"
                    value="15.0"
                    className="w-full px-2 py-1 border border-gray-200 rounded"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Pos. (mm)</p>
                  <input
                    type="number"
                    value="5.0"
                    className="w-full px-2 py-1 border border-gray-200 rounded"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-gray-700">
                  Después de carga
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-500">Vel. (mm/s)</p>
                  <input
                    type="number"
                    value="20.0"
                    className="w-full px-2 py-1 border border-gray-200 rounded"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Pos. (mm)</p>
                  <input
                    type="number"
                    value="8.0"
                    className="w-full px-2 py-1 border border-gray-200 rounded"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="text-yellow-400" size={20} />
                <h3 className="font-bold text-xs uppercase tracking-wider">
                  Sincronización de Carga (11.4)
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300">
                Carga en Paralelo
              </span>
              <button
                onClick={() => setSyncParallel(!syncParallel)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  syncParallel ? "bg-yellow-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    syncParallel ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Ejecutar con molde abierto
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
