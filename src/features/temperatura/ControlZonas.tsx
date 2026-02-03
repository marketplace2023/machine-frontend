import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Zap, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ThermalZone {
  id: number;
  name: string;
  temperature: number;
  setPoint: number;
  tolerance: number;
  resistance: "ON" | "OFF";
  color: string;
}

export default function ControlZonas() {
  const zones: ThermalZone[] = [
    {
      id: 1,
      name: "Zona 1 (Boquilla)",
      temperature: 245.2,
      setPoint: 245,
      tolerance: 2.0,
      resistance: "ON",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "Zona 2 (Frontal)",
      temperature: 240.1,
      setPoint: 240,
      tolerance: 3.0,
      resistance: "ON",
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "Zona 3 (Central)",
      temperature: 235.0,
      setPoint: 235,
      tolerance: 3.0,
      resistance: "OFF",
      color: "bg-orange-400",
    },
    {
      id: 4,
      name: "Zona 4 (Trasera)",
      temperature: 220.4,
      setPoint: 220,
      tolerance: 5.0,
      resistance: "ON",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      name: "Zona 5",
      temperature: 190.2,
      setPoint: 190,
      tolerance: 5.0,
      resistance: "ON",
      color: "bg-blue-400",
    },
    {
      id: 6,
      name: "Zona 6 (Alimentación)",
      temperature: 180.5,
      setPoint: 180,
      tolerance: 5.0,
      resistance: "OFF",
      color: "bg-blue-300",
    },
  ];

  const stats = {
    avgTemperature: 242.5,
    energyConsumption: 12.8,
    zonesInTolerance: 6,
    totalZones: 6,
    preheatingTime: 24,
    totalActiveTime: 142,
    accumulatedConsumption: 1250,
  };

  const alerts = [
    {
      id: 1,
      zone: "Zona 1",
      message: "RESISTENCIA ZONA 1",
      severity: "OK",
      color: "text-green-600",
    },
    {
      id: 2,
      message: "INTEGRIDAD DE TERMOCUPLA",
      severity: "WARNING",
      color: "text-yellow-600",
      priority: 5,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Capítulo 8: Temperatura (Termodinámica)
          </h1>
          <Badge variant="outline" className="mt-2">
            ESTABILIDAD TÉRMICA OK
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">PROCESO ESTABLE</Badge>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Activity className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              TEMPERATURA PROMEDIO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.avgTemperature} °C</div>
            <p className="text-sm text-blue-600 mt-1">→ DELTA ±2.0°C</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              CONSUMO ENERGÉTICO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats.energyConsumption} kWh/h
            </div>
            <p className="text-sm text-blue-600 mt-1">EFICIENCIA 94+</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ZONAS EN TOLERANCIA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats.zonesInTolerance}/{stats.totalZones} Zonas
            </div>
            <p className="text-sm text-green-600 mt-1">TODOS LOS SENSORES OK</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              TIEMPO DE PRECALENTAMIENTO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.preheatingTime} min</div>
            <p className="text-sm text-gray-600 mt-1">
              CICLO DE INICIO COMPLETADO
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Digital Twin */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              GEMELO DIGITAL TÉRMICO
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Visual representation */}
            <div className="mb-6">
              <div className="flex items-center gap-2 h-32 bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-center w-20 bg-gray-200 h-full rounded flex items-center justify-center">
                  BOQUILLA
                </div>
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`flex-1 ${zone.color} h-full rounded flex flex-col items-center justify-center text-white relative`}
                  >
                    <div className="absolute -top-6 text-xs text-gray-700 font-medium">
                      {zone.setPoint}°
                    </div>
                    <span className="text-xs font-medium">ZONA {zone.id}</span>
                  </div>
                ))}
                <div className="text-xs text-center w-20 bg-blue-100 h-full rounded flex items-center justify-center">
                  ALIMENTACIÓN
                </div>
              </div>
            </div>

            {/* Zone Control Panel */}
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">
                  PANEL DE CONTROL DE ZONAS (SECCIÓN 15.1)
                </h3>
                <Badge variant="outline" className="text-blue-600">
                  UNIDAD: CELSIUS (°C)
                </Badge>
              </div>

              <div className="grid grid-cols-5 gap-2 text-xs font-medium text-gray-600 pb-2 border-b">
                <div>ZONA DE CALEFACCIÓN</div>
                <div className="text-center">TEMP. ACTUAL</div>
                <div className="text-center">SET POINT</div>
                <div className="text-center">TOLERANCIA (+/-)</div>
                <div className="text-center">ESTADO RESISTENCIA</div>
              </div>

              {zones.map((zone) => (
                <div
                  key={zone.id}
                  className="grid grid-cols-5 gap-2 items-center py-3 border-b hover:bg-gray-50"
                >
                  <div className="font-medium">{zone.name}</div>
                  <div className="text-center">
                    <span className="font-bold text-red-600">
                      {zone.temperature}
                    </span>
                  </div>
                  <div className="text-center">{zone.setPoint}</div>
                  <div className="text-center">{zone.tolerance}</div>
                  <div className="text-center">
                    <Badge
                      variant={zone.resistance === "ON" ? "default" : "outline"}
                    >
                      {zone.resistance} (
                      {zone.resistance === "ON" ? "120%" : "0%"})
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Efficiency & Alerts */}
        <div className="space-y-6">
          {/* Efficiency Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                EFICIENCIA Y CALIBRACIÓN
              </CardTitle>
              <div className="text-xs text-gray-500">SECCIÓN 15</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Zap className="w-4 h-4 mr-2" />
                AUTO-TUNING PID
              </Button>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    AHORRO ENERGÉTICO
                  </span>
                  <Badge variant="outline" className="text-green-600">
                    ACTIVO
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Modo Standby</span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Apagado Programado
                  </span>
                  <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  RESUMEN DE CALENTAMIENTO
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo total activo</span>
                    <span className="font-medium">
                      {stats.totalActiveTime} h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Consumo acumulado</span>
                    <span className="font-medium">
                      {stats.accumulatedConsumption} kWh
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alerts Card */}
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                ALERTAS TÉRMICAS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      {alert.zone && (
                        <div className="text-xs text-gray-400 mb-1">
                          {alert.zone}
                        </div>
                      )}
                      <div className="font-medium">{alert.message}</div>
                      {alert.priority && (
                        <div className="flex gap-1 mt-2">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < alert.priority
                                  ? "bg-yellow-500"
                                  : "bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <Badge className={alert.color}>{alert.severity}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
