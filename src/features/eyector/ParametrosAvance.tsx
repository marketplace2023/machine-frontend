import { Card } from "../../components/ui/card";
import {
  Settings,
  CheckCircle,
  Link2,
  Droplets,
  RefreshCw,
} from "lucide-react";
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
  badgeColor = "bg-blue-100 text-blue-600",
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

export default function ParametrosAvance() {
  const [parallelMode, setParallelMode] = useState(true);
  const [delayMode, setDelayMode] = useState(false);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Capítulo 3: Eyector (Sincronización y Ajustes)
          </h1>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
            Ajuste Avanzado
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-gray-900 uppercase">
            Sync Activa
          </span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Sincronización Robot"
          value="EUROMAP 67"
          badge="READY"
          badgeColor="bg-green-100 text-green-700"
          subtitle="Último por señal"
        />
        <MetricCard
          title="Modo de Movimiento"
          value="Paralelo"
          subtitle="Husillo con apertura"
        />
        <MetricCard
          title="Estado Lubricación"
          value="85%"
          badge="OK"
          badgeColor="bg-green-100 text-green-700"
          subtitle="Nivel depósito óptimo"
        />
        <MetricCard
          title="Ciclos para Engrase"
          value="4,250"
          subtitle="Estimado 145 horas"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Ball Screw */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Settings className="text-blue-600" size={20} />
              Gemelo Digital de Diagnóstico: Husillo de Bolas
            </h3>
            <div className="px-3 py-1 bg-green-100 rounded-lg">
              <span className="text-xs font-bold text-green-700 uppercase">
                Servo-Linkage OK
              </span>
            </div>
          </div>

          {/* Ball Screw Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[350px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-2xl">
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
                <div className="w-16 h-1 bg-gray-400"></div>

                {/* Lubrication Point 1 */}
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-700"></div>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-bold text-blue-600">
                      Puerto Lubricación 1
                    </span>
                  </div>
                </div>

                {/* Ball Screw */}
                <div className="flex flex-col items-center">
                  <div className="w-64 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg border-2 border-blue-600 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    {/* Thread pattern */}
                    <div className="absolute inset-0 flex items-center justify-around px-2">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 h-12 bg-blue-700 opacity-30"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-bold text-blue-700 uppercase">
                    Husillo de Bolas
                  </p>
                </div>

                {/* Lubrication Point 2 */}
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-700"></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-bold text-blue-600">
                      Puerto Lubricación 2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - EUROMAP Interface */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Interfaz EUROMAP 87 (Sección 5.1)
            </h3>
            <Link2 className="text-blue-600" size={18} />
          </div>

          <div className="mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase mb-3">
              Matriz de señales I/O Robot
            </p>
            <div className="space-y-1">
              <SignalRow label="Mold protected" active={true} />
              <SignalRow label="Ejector back (Home)" active={true} />
              <SignalRow label="Ejector forward" active={false} />
              <SignalRow label="Emergency Stop Robot" active={false} />
              <SignalRow label="Auto Mode active" active={true} />
              <SignalRow label="Safety Gates closed" active={true} />
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold text-blue-900 uppercase">
                Diagnóstico Bus
              </p>
              <span className="text-xs font-bold text-blue-700">
                ACTIVO (CÁMARA SUPERIOR)
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sync Configuration Panel */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6">
            Panel de Configuración de Sincronización (Sección 5.2)
          </h3>

          <div className="space-y-6">
            {/* Parallel Mode */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Movimiento Paralelo con Apertura
                  </p>
                  <p className="text-xs text-gray-500">
                    Reduce tiempo de ciclo
                  </p>
                </div>
                <button
                  onClick={() => setParallelMode(!parallelMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    parallelMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      parallelMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Anticipo Apertura (MS)
                  </p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="150"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Dwell Time (MS)
                  </p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delay Mode */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Retraso de Expulsión
                  </p>
                  <p className="text-xs text-gray-500">
                    Espera tras apertura total
                  </p>
                </div>
                <button
                  onClick={() => setDelayMode(!delayMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    delayMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      delayMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Rampa Secuenciación
                  </p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="12"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Fuerza Sync (%)
                  </p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value="8.5"
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Sync System and Telemetry */}
        <div className="space-y-6">
          {/* Sync-Drive System */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="text-blue-400" size={20} />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                Sync-Drive System
              </h3>
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              El sistema coordina el movimiento del husillo con la apertura del
              molde mediante el bus de campo de alta velocidad, garantizando
              ciclos constantes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                  Respuesta
                </p>
                <p className="text-sm font-bold text-white">Real-time</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                  Protocolo
                </p>
                <p className="text-sm font-bold text-blue-400">EtherCAT</p>
              </div>
            </div>
          </Card>

          {/* Lubrication Telemetry */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="text-orange-500" size={20} />
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Telemetría de Engrase
              </h3>
            </div>
            <p className="text-xs text-gray-500 uppercase mb-2">
              Último Engrase: 12/05/2025
            </p>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Presión Bomba
                </span>
                <span className="text-lg font-bold text-gray-900">
                  45.2 <span className="text-sm text-gray-600">bar</span>
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Próximo servicio en:</span>
                <span className="font-bold text-gray-900">4,250 ciclos</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Consumo estimado:</span>
                <span className="font-bold text-gray-900">0.2 ml/ciclo</span>
              </div>
            </div>
          </Card>

          {/* Maintenance Alert */}
          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={18} className="text-yellow-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-yellow-900 mb-1">
                  Mantenimiento del Eje
                </p>
                <p className="text-xs text-yellow-800 leading-relaxed">
                  Sección 6.2: Verificar nivel de grasa cada 5,000 ciclos.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
