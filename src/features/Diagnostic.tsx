import { useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { ActuatorNode } from "../components/ui/actuator-node";
import { EfficiencyCard } from "../components/ui/efficiency-card";
import {
  Wrench,
  Zap,
  RotateCcw,
  RefreshCw,
  ArrowUpDown,
  ChevronUp,
  Info,
  AlertTriangle,
  AlertCircle,
  ExternalLink,
  Thermometer,
} from "lucide-react";

interface Sensor {
  id: string;
  desc: string;
  state: "ON" | "OFF";
  time: string;
  status: "ok" | "neutral" | "warning";
}

interface Alarm {
  type: "error" | "warning";
  title: string;
  description: string;
  time: string;
  action: string;
}

export default function Diagnostic() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos iniciales del PLC
    setTimeout(() => setLoading(false), 500);
  }, []);

  const sensors: Sensor[] = [
    {
      id: "IND-201",
      desc: "Inductivo: Molde Cerrado",
      state: "ON",
      time: "1.2ms",
      status: "ok",
    },
    {
      id: "PRS-105",
      desc: "Presión Hidráulica Cavidad",
      state: "ON",
      time: "0.8ms",
      status: "ok",
    },
    {
      id: "IND-202",
      desc: "Inductivo: Molde Abierto",
      state: "OFF",
      time: "1.5ms",
      status: "neutral",
    },
    {
      id: "PRS-110",
      desc: "Presión Retorno Boquilla",
      state: "OFF",
      time: "14.2ms",
      status: "warning",
    },
  ];

  const alarms: Alarm[] = [
    {
      type: "error",
      title: "Desviación de Torque Detectada - Servomotor Inyección (S2)",
      description:
        "La carga medida excede el límite nominal en un 15% durante la fase de compactación.",
      time: "14:32:05",
      action: "Ver Trazado",
    },
    {
      type: "warning",
      title: "Error de Comunicación Intermitente - Encoder Boquilla (S5)",
      description:
        "Paquetes perdidos detectados en el bus EtherCAT. Revisar cableado de señal.",
      time: "14:28:12",
      action: "Diagnóstico Bus",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Cargando datos de diagnóstico...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Diagnóstico de Actuadores y Sensores
          </h1>
          <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider border border-green-200">
            En Línea
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Actuators and Sensors */}
        <div className="lg:col-span-8 space-y-8">
          {/* Actuator Map */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm tracking-wide">
                <Wrench className="text-blue-600" size={20} />
                Esquema de Actuadores (Unidades Servo)
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Salud Óptima
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Advertencia
                  </span>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-50 rounded-xl border border-dashed border-gray-300 min-h-[350px] flex items-center justify-center p-8 overflow-hidden">
              <div className="relative w-full max-w-2xl h-64 flex justify-between items-center px-10">
                <ActuatorNode
                  icon={RotateCcw}
                  label="Clamping"
                  id="S1"
                  health="98.2"
                  colorClass="border-green-500"
                />

                <div className="flex flex-col gap-12">
                  <ActuatorNode
                    icon={Zap}
                    label="Inyección"
                    id="S2"
                    health="84.5"
                    colorClass="border-orange-400"
                  />
                  <ActuatorNode
                    icon={RefreshCw}
                    label="Charge"
                    id="S4"
                    health="96.0"
                    colorClass="border-green-500"
                    size="w-16 h-16"
                  />
                </div>

                <div className="flex flex-col gap-12">
                  <ActuatorNode
                    icon={ArrowUpDown}
                    label="Boquilla"
                    id="S5"
                    health="99.1"
                    colorClass="border-green-500"
                    size="w-16 h-16"
                  />
                  <ActuatorNode
                    icon={ChevronUp}
                    label="Eyector"
                    id="S3"
                    health="97.8"
                    colorClass="border-green-500"
                    size="w-16 h-16"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Sensors Table */}
          <Card className="overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600">
                Diagnóstico de Sensores (Sección 3.1)
              </h3>
              <span className="text-[10px] font-bold text-gray-400">
                Total: 42 activos
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold uppercase text-gray-400 border-b border-gray-100">
                    <th className="px-6 py-4">ID Sensor</th>
                    <th className="px-6 py-4">Descripción</th>
                    <th className="px-6 py-4 text-center">Estado Lógico</th>
                    <th className="px-6 py-4 text-right">Tiempo Resp (ms)</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {sensors.map((sensor, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-3 font-mono text-gray-500">
                        {sensor.id}
                      </td>
                      <td className="px-6 py-3 text-gray-700">{sensor.desc}</td>
                      <td className="px-6 py-3 text-center">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            sensor.state === "ON"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {sensor.state}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-right font-mono text-gray-600">
                        {sensor.time}
                      </td>
                      <td className="px-6 py-3 text-right">
                        {sensor.status === "warning" ? (
                          <AlertTriangle
                            size={18}
                            className="text-orange-400 inline"
                          />
                        ) : (
                          <Info size={18} className="text-gray-300 inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right Column: KPIs and Controller Health */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-6 flex justify-between">
              Dashboard de Eficiencia (18.1)
              <ExternalLink size={14} className="text-gray-400" />
            </h3>
            <EfficiencyCard
              label="Disponibilidad"
              value={94.2}
              color="bg-blue-600"
              sparkline="M0 15 L10 12 L20 16 L30 10 L40 14 L50 8 L60 12 L70 9 L80 13 L90 5 L100 10"
            />
            <EfficiencyCard
              label="Rendimiento"
              value={89.1}
              color="bg-green-500"
              sparkline="M0 10 L10 15 L20 12 L30 18 L40 10 L50 14 L60 8 L70 12 L80 10 L90 15 L100 12"
            />
            <EfficiencyCard
              label="Calidad"
              value={99.8}
              color="bg-indigo-500"
              sparkline="M0 18 L10 17 L20 18 L30 17 L40 18 L50 17 L60 18 L70 17 L80 18 L90 17 L100 18"
            />
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-4">
              Carga del Controlador
            </h3>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    className="text-gray-100"
                    cx="40"
                    cy="40"
                    fill="transparent"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="6"
                  ></circle>
                  <circle
                    className="text-blue-600"
                    cx="40"
                    cy="40"
                    fill="transparent"
                    r="34"
                    stroke="currentColor"
                    strokeDasharray="213.6"
                    strokeDashoffset="140"
                    strokeLinecap="round"
                    strokeWidth="6"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">34%</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">
                  CPU Usage
                </p>
                <p className="text-base font-bold text-gray-900">
                  PLC-Next 8.2
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Thermometer size={12} className="text-green-600" />
                  <p className="text-[10px] text-green-600 font-bold uppercase">
                    42°C (ÓPTIMA)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Alarms Section */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
          <h3 className="font-bold text-[10px] uppercase tracking-widest text-gray-400">
            Registro de Alarmas de Sistema (Tiempo Real)
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-white uppercase">
              2 Alertas Activas
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {alarms.map((alarm, i) => (
            <div
              key={i}
              className={`p-4 flex items-center gap-4 transition-colors ${
                alarm.type === "error"
                  ? "hover:bg-red-50/50"
                  : "hover:bg-orange-50/50"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  alarm.type === "error"
                    ? "bg-red-100 text-red-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {alarm.type === "error" ? (
                  <AlertCircle size={20} />
                ) : (
                  <AlertTriangle size={20} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">{alarm.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {alarm.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-900 font-mono">
                  {alarm.time}
                </p>
                <button className="text-[10px] text-blue-600 font-bold uppercase mt-1 hover:underline">
                  {alarm.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
