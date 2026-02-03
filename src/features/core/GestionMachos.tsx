import { Card } from "../../components/ui/card";
import { Circle, Shield, Info } from "lucide-react";
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

interface SignalRowProps {
  label: string;
  active: boolean;
}

function SignalRow({ label, active }: SignalRowProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-700">{label}</span>
      <div
        className={`w-3 h-3 rounded-full ${active ? "bg-green-500" : "bg-gray-300"}`}
      />
    </div>
  );
}

export default function GestionMachos() {
  const [coreASyncOn, setCoreASyncOn] = useState(true);
  const [coreBSyncOn, setCoreBSyncOn] = useState(false);
  const [airBlastOn, setAirBlastOn] = useState(true);
  const [unscrewMode, setUnscrewMode] = useState(false);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 4: Core (Gestión de Machos)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Control de Núcleos
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-gray-900 uppercase">
            Bus Activo
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Estado Macho A"
          value="En Posición"
          badge="OK"
          subtitle="Actuador hidráulico 1"
        />
        <MetricCard
          title="Estado Macho B"
          value="Retraído"
          subtitle="Esperando ciclo"
        />
        <MetricCard
          title="Soplado (Air Blast)"
          value="6.2"
          unit="bar"
          subtitle="Presión de línea estable"
        />
        <MetricCard
          title="Modo Operativo"
          value="SECUENCIAL"
          subtitle="Prioridad: Macho A → B"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Cores */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Circle className="text-blue-600" size={20} />
              Gemelo Digital de Núcleos
            </h3>
            <div className="px-3 py-1 bg-blue-100 rounded-lg">
              <span className="text-xs font-bold text-blue-700 uppercase">
                Visualización Real-Time
              </span>
            </div>
          </div>

          {/* Cores Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-2xl">
              {/* Mold Cavity Label */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-xs font-bold text-gray-600 uppercase">
                  Cavidad de Molde
                </span>
              </div>

              <div className="flex items-center justify-center gap-8">
                {/* Core A (Active - Blue) */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg border-2 border-blue-600 shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-700 rounded-b-lg"></div>

                      {/* Core tip */}
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-r-lg border-2 border-blue-600"></div>
                    </div>

                    {/* Position indicator */}
                    <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                      <div className="text-xs font-bold text-blue-600 whitespace-nowrap">
                        Pos: 125mm
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        Torque: 65%
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-blue-700 uppercase">
                    Macho A
                  </p>
                </div>

                {/* Mold Cavity Center */}
                <div className="w-48 h-80 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl border-2 border-gray-300 shadow-inner relative">
                  <div className="absolute inset-4 bg-white/50 rounded-lg"></div>
                </div>

                {/* Core B (Retracted - Gray) */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg border-2 border-gray-500 shadow-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-600 rounded-b-lg"></div>
                    </div>

                    {/* Position indicator */}
                    <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-right">
                      <div className="text-xs font-bold text-gray-600 whitespace-nowrap">
                        Home
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        Torque: 30%
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-gray-600 uppercase">
                    Macho B
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Safety Logic */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Lógica de Seguridad e Interlocks
            </h3>
            <Shield className="text-blue-600" size={18} />
          </div>

          <div className="mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase mb-3">
              I/O Signals (Sección 8.1 - 8.4)
            </p>
            <div className="space-y-1">
              <SignalRow label="Mold Closed Signal" active={true} />
              <SignalRow label="Core A in Position" active={true} />
              <SignalRow label="Core B Retracted" active={true} />
              <SignalRow label="Ejector Interlock" active={true} />
              <SignalRow label="Pressure Relief Valve" active={false} />
            </div>
          </div>

          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-gray-700 uppercase">
                Seguridad Hardware
              </p>
              <span className="text-xs font-bold text-green-700">VALIDADO</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Control Panel */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6">
            Panel de Control de Etapas (Sección 7.2)
          </h3>

          <div className="space-y-6">
            {/* Core A Control */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-sm font-bold text-gray-900">
                  Macho A (Entrada)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Unidad Core
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Macho A (Entrada)
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Velocidad (mm/s)
                  </p>
                  <input
                    type="number"
                    value="150"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Límite Torque (%)
                  </p>
                  <input
                    type="number"
                    value="65"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Sync (On-The-Fly) (Sec. 8.3)
                </span>
                <button
                  onClick={() => setCoreASyncOn(!coreASyncOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    coreASyncOn ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      coreASyncOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Core B Control */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <p className="text-sm font-bold text-gray-900">
                  Macho B (Lateral)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Unidad Core
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Macho B (Lateral)
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Velocidad (mm/s)
                  </p>
                  <input
                    type="number"
                    value="120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Límite Torque (%)
                  </p>
                  <input
                    type="number"
                    value="70"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Sync (On-The-Fly) (Sec. 8.3)
                </span>
                <button
                  onClick={() => setCoreBSyncOn(!coreBSyncOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    coreBSyncOn ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      coreBSyncOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Special Functions */}
        <div className="space-y-6">
          {/* Air Blast */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Funciones Especiales
              </h3>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Soplado de Aire (Air Blast)
                  </p>
                  <p className="text-xs text-gray-500">
                    Sección 9.1 — Limpieza de núcleos
                  </p>
                </div>
                <button
                  onClick={() => setAirBlastOn(!airBlastOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    airBlastOn ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      airBlastOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value="1.5"
                  step="0.1"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                  readOnly
                />
                <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 uppercase">
                  Test
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Lógica de Desenroscado
                  </p>
                  <p className="text-xs text-gray-500">
                    Sección 9.1 — Moldes con rosca
                  </p>
                </div>
                <button
                  onClick={() => setUnscrewMode(!unscrewMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    unscrewMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      unscrewMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Vueltas
                  </p>
                  <input
                    type="number"
                    value="8.0"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Paso (mm)
                  </p>
                  <input
                    type="number"
                    value="2.5"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Auxiliary Management */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-blue-400" size={20} />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                Gestión Auxiliar
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Configuración avanzada de núcleos laterales, secuencias de
              desenroscado y sincronización con otros sistemas.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
