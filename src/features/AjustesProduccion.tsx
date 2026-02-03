import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Package,
  Clock,
  Settings2,
  RotateCcw,
  Wrench,
  Calendar,
} from "lucide-react";

export default function AjustesProduccion() {
  const cycleHistory = [
    { time: "Hace 10 min", value: 85 },
    { time: "Hace 15 min", value: 92 },
    { time: "Hace 20 min", value: 88 },
    { time: "Hace 25 min", value: 95 },
    { time: "Ahora", value: 90 },
  ];

  const maxCycle = Math.max(...cycleHistory.map((c) => c.value));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Capítulo 9: Ajustes de Producción
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            PLANIFICACIÓN ACTIVA
          </Badge>
          <div className="text-sm text-gray-600">
            HORA LOCAL
            <br />
            <span className="font-bold">14:28:45</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Settings2 className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              PROGRESO DE LOTE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">75%</div>
              <div className="relative w-20 h-20">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.75)}`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              PIEZAS TOTALES
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">
              4,500 <span className="text-xl text-gray-400">/ 6,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              RECHAZOS (NG)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 mb-1">
              42 <span className="text-lg text-gray-600">UNIDADES</span>
            </div>
            <p className="text-sm text-gray-600">0.93% Tasa de rechazo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ESTADO PLANIFICACIÓN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-600 text-white text-lg px-4 py-2">
              ● EN MARCHA
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Setup Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                PLANIFICACIÓN DE LOTES (JOB SETUP)
              </CardTitle>
              <Button variant="outline" size="sm" className="text-blue-600">
                <Clock className="w-4 h-4 mr-2" />
                Historial de Órdenes
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  ID DE ORDEN
                </label>
                <Input
                  value="ORD-2024-0892"
                  className="font-mono text-lg"
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  MATERIAL (LOTE)
                </label>
                <select className="w-full p-2 border rounded-md text-lg">
                  <option>PP-IH02 (Lote: #A4521)</option>
                  <option>PP-IH03 (Lote: #A4522)</option>
                  <option>ABS-HG01 (Lote: #B1234)</option>
                </select>
              </div>
            </div>

            {/* Quantity Setup */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  CANTIDAD DE CAVIDADES
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value="8"
                    className="w-20 text-center text-2xl font-bold"
                  />
                  <Button variant="outline" size="sm">
                    Auto
                  </Button>
                  <Button variant="outline" size="sm">
                    Manual
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  META DE PRODUCCIÓN
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value="6000"
                    className="text-2xl font-bold"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    PIEZAS
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" size="lg">
                Cancelar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                Actualizar Planificación
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* OEE Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              DASHBOARD DE EFICIENCIA OEE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Disponibilidad</span>
                <span className="font-bold text-green-600">96.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "96.5%" }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Rendimiento (Performance)
                </span>
                <span className="font-bold text-blue-600">92.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "92.1%" }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Calidad</span>
                <span className="font-bold text-green-600">99.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "99.2%" }}
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">OEE GLOBAL</div>
                <div className="text-5xl font-bold text-gray-900">88.0%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Counter Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              GESTIÓN DE CONTADORES
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              {/* Current Parts */}
              <div className="space-y-4">
                <div className="text-sm text-gray-600 mb-2">
                  PIEZAS ACTUALES
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold">4,542</div>
                  <Button variant="outline" size="sm" className="text-red-600">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reiniciar Contador
                  </Button>
                </div>
              </div>

              {/* Purge Parts */}
              <div className="space-y-4">
                <div className="text-sm text-gray-600 mb-2">
                  PIEZAS DE PURGA
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold">24</div>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reiniciar
                  </Button>
                </div>
              </div>

              {/* Proximity Alert */}
              <div className="pt-4 border-t">
                <div className="text-sm font-medium text-gray-600 mb-3">
                  ALERTA DE PROXIMIDAD
                </div>
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    value="100"
                    className="w-24 text-center text-xl font-bold"
                  />
                  <span className="text-sm text-gray-600">PIEZAS ANTES</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Emitir señal acústica y visual antes de contactar el lote.
                </p>
              </div>

              {/* End of Lot Action */}
              <div className="pt-4 border-t">
                <div className="text-sm font-medium text-gray-600 mb-3">
                  ACCIÓN AL FINALIZAR LOTE
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    PARAR MÁQUINA
                  </Button>
                  <Button variant="outline" className="flex-1">
                    CONTINUAR
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Cycle Time History */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  HISTORIAL TIEMPOS DE CICLO
                </CardTitle>
                <Badge variant="outline" className="text-blue-600">
                  Ref. 19.3s
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-32 gap-1">
                {cycleHistory.map((data, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-full rounded-t ${
                        idx === cycleHistory.length - 1
                          ? "bg-blue-600"
                          : "bg-blue-300"
                      }`}
                      style={{ height: `${(data.value / maxCycle) * 100}%` }}
                    />
                    <div className="text-xs text-gray-600 text-center">
                      {data.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Scheduler */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                PLANIFICADOR MANTENIMIENTO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">
                      Lubricación Central
                    </div>
                    <div className="text-xs text-gray-600">
                      Sistema - Bisagra
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-600">Vida restante</div>
                  <div className="text-2xl font-bold text-blue-600">
                    124 horas
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800">
                <Calendar className="w-4 h-4 mr-2" />
                PROGRAMAR INTERVENCIÓN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
