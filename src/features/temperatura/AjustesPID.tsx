import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Settings2,
  Snowflake,
  Download,
  CalendarClock,
  Droplet,
  CheckCircle2,
} from "lucide-react";

interface PIDZone {
  id: number;
  name: string;
  p: number;
  i: number;
  d: number;
  sampling: number;
}

export default function AjustesPID() {
  const zones: PIDZone[] = [
    { id: 1, name: "T1 - Boquilla", p: 12.4, i: 0.8, d: 4.2, sampling: 1.0 },
    { id: 2, name: "T2 - Frontal", p: 14.2, i: 1.1, d: 3.8, sampling: 1.0 },
    { id: 3, name: "T3 - Central 1", p: 15.8, i: 0.9, d: 5.1, sampling: 2.0 },
    { id: 4, name: "T4 - Central 2", p: 15.8, i: 0.9, d: 5.1, sampling: 2.0 },
    { id: 5, name: "T5 - Trasera", p: 18.1, i: 1.4, d: 6.5, sampling: 2.0 },
    {
      id: 6,
      name: "T6 - Alimentación",
      p: 22.5,
      i: 2.0,
      d: 8.0,
      sampling: 5.0,
    },
  ];

  const consumptionData = [
    { day: "L", value: 65 },
    { day: "M", value: 75 },
    { day: "Mi", value: 80 },
    { day: "J", value: 85 },
    { day: "V", value: 90 },
    { day: "S", value: 70 },
    { day: "D", value: 55 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Capítulo 8: Temperatura - Ajustes Avanzados
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            MODO CONFIGURACIÓN PID
          </Badge>
          <Badge variant="outline" className="text-green-600 border-green-600">
            ● CONTROL OPTIMIZADO
          </Badge>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Settings2 className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ESTADO DE AUTO-TUNING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">COMPLETO</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>ÚLTIMA CALIBRACIÓN: HOY</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              MODO DE AHORRO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">ACTIVO</div>
            <p className="text-sm text-blue-600 mt-2">
              ALGORITMO ECO-DRIVE V2.1
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              TEMP. GARGANTA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              35.4 <span className="text-xl">°C</span>
            </div>
            <p className="text-sm text-green-600 mt-2">
              CIRCUITO DE REFRIGERACIÓN OK
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              EFICIENCIA TÉRMICA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">A++</div>
            <p className="text-sm text-gray-600 mt-2">BAJO CONSUMO POR CICLO</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PID Tuning Table */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-600" />
                SINTONIZACIÓN PID (SECCIÓN 16.2)
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                EXPORTAR CONFIGURACIÓN
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm text-gray-600">
                    <th className="text-left py-3 font-medium">ZONA</th>
                    <th className="text-center py-3 font-medium">
                      P<br />
                      (PROPORCIONAL)
                    </th>
                    <th className="text-center py-3 font-medium">
                      I<br />
                      (INTEGRAL)
                    </th>
                    <th className="text-center py-3 font-medium">
                      D<br />
                      (DERIVATIVO)
                    </th>
                    <th className="text-center py-3 font-medium">
                      SAMPLING (S)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((zone) => (
                    <tr key={zone.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 font-medium">{zone.name}</td>
                      <td className="text-center">
                        <Input
                          type="number"
                          value={zone.p}
                          step="0.1"
                          className="w-20 mx-auto text-center"
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          type="number"
                          value={zone.i}
                          step="0.1"
                          className="w-20 mx-auto text-center"
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          type="number"
                          value={zone.d}
                          step="0.1"
                          className="w-20 mx-auto text-center"
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          type="number"
                          value={zone.sampling}
                          step="0.1"
                          className="w-20 mx-auto text-center"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Standby Modes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarClock className="w-5 h-5 text-blue-600" />
                MODOS STANDBY (SECCIÓN 16.1)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-sm">
                    ECO-STANDBY SEMANAL
                  </span>
                  <CalendarClock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">L-V: 18:00 a 06:00</span>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t">
                    <span className="text-gray-700">Temp. Mantenimiento</span>
                    <span className="font-bold text-lg">140.0 °C</span>
                  </div>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Settings2 className="w-4 h-4 mr-2" />
                CONFIGURAR PROGRAMACIÓN
              </Button>
            </CardContent>
          </Card>

          {/* Throat Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Droplet className="w-5 h-5 text-blue-600" />
                CONTROL DE LA GARGANTA (SECCIÓN 16.4)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">SET POINT FLUJO</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">4.5</span>
                    <span className="text-sm text-gray-600">L/min</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">LÍMITE SUPERIOR</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">45.0</span>
                    <span className="text-sm text-gray-600">°C</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-green-700 font-medium">
                  REFRIGERACIÓN ESTABLE SIN CONDENSACIÓN
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cold Start Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Snowflake className="w-5 h-5 text-yellow-600" />
              GESTIÓN DE ARRANQUE EN FRÍO Y ALARMAS (SECCIÓN 15.3)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm text-gray-600 mb-2">
                  TIEMPO DE REHOZO (SOAK TIME)
                </div>
                <div className="flex items-end gap-2">
                  <Input
                    type="number"
                    defaultValue="15"
                    className="w-24 text-center text-2xl font-bold"
                  />
                  <span className="text-sm text-gray-600 mb-2">MIN</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-600 mb-2">
                  TOLERANCIA ALARMA PERMISIÓN
                </div>
                <div className="flex items-end gap-2">
                  <Input
                    type="number"
                    defaultValue="5.0"
                    step="0.1"
                    className="w-24 text-center text-2xl font-bold"
                  />
                  <span className="text-sm text-gray-600 mb-2">°C</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-600 mb-2">
                  PROTECCIÓN ARRANQUE HÚMEDO
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-sm font-medium text-green-600">
                    ACTIVADA
                  </span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consumption Monitor */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">MONITOR DE CONSUMO</CardTitle>
              <Badge className="bg-green-600 text-white">-12% vs Ayer</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-1">
              {consumptionData.map((data, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-full rounded-t ${
                      idx === consumptionData.length - 1
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                    style={{ height: `${data.value}%` }}
                  ></div>
                  <div className="text-xs">{data.day}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
