import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Settings,
  Zap,
  CheckCircle,
  Plus,
  Minus,
  RotateCcw,
  BookOpen,
  Circle,
} from "lucide-react";
import { useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle?: string;
  status?: "success" | "warning" | "neutral";
  statusText?: string;
  badge?: string;
}

function MetricCard({
  title,
  value,
  unit,
  subtitle,
  statusText,
  badge,
}: MetricCardProps) {
  return (
    <Card className="p-6">
      <p className="text-xs font-bold text-gray-500 uppercase mb-2">{title}</p>
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <span className="text-lg font-medium text-gray-600">{unit}</span>
      </div>
      {badge && <p className="text-xs text-blue-600 font-medium">{badge}</p>}
      {statusText && <p className="text-xs text-gray-500 mt-1">{statusText}</p>}
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </Card>
  );
}

export default function AjusteFuerza() {
  const [isAutoAdjusting, setIsAutoAdjusting] = useState(false);

  const handleAutoAdjust = () => {
    setIsAutoAdjusting(true);
    setTimeout(() => setIsAutoAdjusting(false), 3000);
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
            Ajuste y Calibración
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
          title="Fuerza de Cierre Objetivo"
          value="1250"
          unit="kN"
          badge="Ajuste automático activo"
        />
        <MetricCard
          title="Altura de Molde Actual"
          value="325.40"
          unit="mm"
          statusText="Última lectura: 325.45 mm"
        />
        <MetricCard
          title="Tiempo de Ajuste"
          value="12.5"
          unit="s"
          statusText="Tiempo transcurrido"
        />
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-gray-700 uppercase">
              Estado de Calibración
            </p>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">Calibrado</h3>
          <p className="text-sm font-medium text-green-700">Punto Cero OK</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Digital Twin - Adjustment */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
              <Settings className="text-blue-600" size={20} />
              Gemelo Digital de Ajuste
            </h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <RotateCcw size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Circle size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Adjustment Visualization */}
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full max-w-lg">
              {/* Height Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex items-center">
                  <div className="h-px w-32 bg-blue-500 relative">
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-600 whitespace-nowrap">
                      325.40 mm
                    </span>
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-16">
                {/* Fixed Plate */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-80 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg border-2 border-gray-400 shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-500 rounded-b-lg"></div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-gray-600 uppercase">
                    Placa Fija
                  </p>
                </div>

                {/* Adjustable Plate with Screws */}
                <div className="flex flex-col items-center relative">
                  <div className="w-40 h-80 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg border-2 border-gray-300 shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>

                    {/* Top Adjustment Screw */}
                    <div className="absolute -left-8 top-12">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-700 shadow-md flex items-center justify-center">
                          <div className="w-1 h-4 bg-blue-700"></div>
                        </div>
                        <div className="h-0.5 w-8 bg-gray-400"></div>
                      </div>
                    </div>

                    {/* Bottom Adjustment Screw */}
                    <div className="absolute -left-8 bottom-12">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-700 shadow-md flex items-center justify-center">
                          <div className="w-1 h-4 bg-blue-700"></div>
                        </div>
                        <div className="h-0.5 w-8 bg-gray-400"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400 rounded-b-lg"></div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-blue-600 uppercase">
                    Placa Trasera (Ajuste)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Servo Monitor */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
              Monitor de Servo de Ajuste
            </h3>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <Settings className="text-blue-600" size={16} />
            </button>
          </div>

          {/* Torque Gauge */}
          <div className="flex justify-center mb-6">
            <div className="relative w-44 h-44">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-100"
                  cx="88"
                  cy="88"
                  fill="transparent"
                  r="75"
                  stroke="currentColor"
                  strokeWidth="14"
                />
                {/* 41% progress (18.5/45) */}
                <circle
                  className="text-blue-600"
                  cx="88"
                  cy="88"
                  fill="transparent"
                  r="75"
                  stroke="currentColor"
                  strokeDasharray="471"
                  strokeDashoffset="278"
                  strokeLinecap="round"
                  strokeWidth="14"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">18.5</span>
                <span className="text-xs text-gray-500 uppercase font-bold mt-1">
                  Torque (Nm)
                </span>
              </div>
            </div>
          </div>

          {/* Min and Max Labels */}
          <div className="flex justify-between text-xs text-gray-600 mb-6">
            <span className="font-bold">MIN: 0.0</span>
            <span className="font-bold text-red-600">LIMIT: 45.0</span>
          </div>

          {/* Motor Load */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-gray-500 uppercase">
                Carga del Motor de Ajuste
              </p>
              <p className="text-2xl font-bold text-gray-900">22%</p>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: "22%" }}
              />
            </div>
          </div>

          {/* Adjustment History */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase mb-3">
              Historial de Ajustes (mm)
            </p>
            <div className="flex items-end justify-between h-20 gap-1">
              {[30, 40, 35, 45, 38, 50, 42, 55, 48, 85].map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t transition-all ${
                    i === 9 ? "bg-blue-600" : "bg-gray-200"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Adjustment Controls */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6">
            Panel de Control de Ajuste
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Auto Adjust Button */}
            <Button
              onClick={handleAutoAdjust}
              disabled={isAutoAdjusting}
              className="h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base"
            >
              <Zap className="mr-2" size={20} />
              {isAutoAdjusting ? "Ajustando..." : "Ajuste Automático"}
            </Button>

            {/* Zero Point Calibration */}
            <Button
              variant="outline"
              className="h-16 border-2 border-gray-300 hover:bg-gray-50 font-bold text-base"
            >
              <RotateCcw className="mr-2" size={20} />
              Calibración Punto Cero
            </Button>
          </div>

          {/* Manual Adjustment and Limits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual Motor Adjustment */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase mb-3">
                Ajuste Manual del Motor
              </p>
              <div className="flex gap-4">
                <Button className="flex-1 h-20 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-900 flex-col">
                  <Plus size={24} className="mb-1" />
                  <span className="text-sm font-bold">Aumentar (+)</span>
                </Button>
                <Button className="flex-1 h-20 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-900 flex-col">
                  <Minus size={24} className="mb-1" />
                  <span className="text-sm font-bold">Disminuir (-)</span>
                </Button>
              </div>
            </div>

            {/* Mold Limits */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase mb-3">
                Límites de Molde
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      Altura Mínima
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      150.00
                    </span>
                    <span className="text-xs text-gray-500">mm</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      Altura Máxima
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      650.00
                    </span>
                    <span className="text-xs text-gray-500">mm</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Calibration Help */}
        <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen size={20} />
            </div>
            <h3 className="font-bold text-sm uppercase tracking-wider">
              Ayuda de Calibración
            </h3>
          </div>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Asegúrese de que no haya restos de material en las caras del molde
            antes de realizar la calibración de Punto Cero para garantizar una
            fuerza de cierre precisa.
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
            Ver Guía Paso a Paso
          </Button>
        </Card>
      </div>
    </div>
  );
}
