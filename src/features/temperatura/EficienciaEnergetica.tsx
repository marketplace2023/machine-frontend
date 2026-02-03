import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  TrendingDown,
  TrendingUp,
  Battery,
  Clock,
  DollarSign,
  Leaf,
  BarChart3,
} from "lucide-react";

export default function EficienciaEnergetica() {
  const energyData = {
    currentConsumption: 12.8,
    averageConsumption: 14.2,
    peakConsumption: 18.5,
    efficiency: 94.2,
    savingsToday: 3.4,
    monthlySavings: 102,
    co2Reduction: 45.2,
    costPerKwh: 0.15,
  };

  const zones = [
    {
      name: "Zona 1 (Boquilla)",
      power: 2.8,
      percentage: 22,
      efficiency: 96,
      status: "optimal",
    },
    {
      name: "Zona 2 (Frontal)",
      power: 2.4,
      percentage: 19,
      efficiency: 94,
      status: "optimal",
    },
    {
      name: "Zona 3 (Central)",
      power: 2.2,
      percentage: 17,
      efficiency: 92,
      status: "good",
    },
    {
      name: "Zona 4 (Trasera)",
      power: 2.0,
      percentage: 16,
      efficiency: 93,
      status: "optimal",
    },
    {
      name: "Zona 5",
      power: 1.8,
      percentage: 14,
      efficiency: 95,
      status: "optimal",
    },
    {
      name: "Zona 6 (Alimentación)",
      power: 1.6,
      percentage: 12,
      efficiency: 97,
      status: "optimal",
    },
  ];

  const hourlyConsumption = [
    { hour: "00:00", consumption: 8.2 },
    { hour: "04:00", consumption: 7.5 },
    { hour: "08:00", consumption: 12.5 },
    { hour: "12:00", consumption: 14.8 },
    { hour: "16:00", consumption: 13.2 },
    { hour: "20:00", consumption: 10.5 },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Optimizar Precalentamiento",
      description:
        "Reducir tiempo de precalentamiento podría ahorrar 2.5 kWh/día",
      savings: "15%",
      priority: "high",
    },
    {
      id: 2,
      title: "Ajustar Zona 3",
      description: "La Zona 3 presenta eficiencia por debajo del óptimo",
      savings: "8%",
      priority: "medium",
    },
    {
      id: 3,
      title: "Modo Standby Nocturno",
      description: "Activar modo de ahorro entre 00:00 y 06:00",
      savings: "12%",
      priority: "high",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Eficiencia Energética - Sistema Térmico
          </h1>
          <p className="text-gray-600 mt-1">
            Monitoreo y optimización del consumo energético
          </p>
        </div>
        <Badge variant="outline" className="text-green-600 border-green-600">
          EFICIENCIA: {energyData.efficiency}%
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              CONSUMO ACTUAL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {energyData.currentConsumption} kWh/h
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm">
              <TrendingDown className="w-4 h-4 text-green-600" />
              <span className="text-green-600">-9.8% vs promedio</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Battery className="w-4 h-4" />
              EFICIENCIA GENERAL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{energyData.efficiency}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${energyData.efficiency}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              AHORRO MENSUAL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${energyData.monthlySavings}
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Proyectado</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              REDUCCIÓN CO₂
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {energyData.co2Reduction} kg
            </div>
            <div className="text-sm text-gray-600 mt-2">Este mes</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consumption by Zone */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Consumo por Zona Térmica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {zones.map((zone) => (
                <div key={zone.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{zone.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">{zone.power} kWh/h</span>
                      <Badge
                        variant={
                          zone.status === "optimal" ? "default" : "outline"
                        }
                        className={
                          zone.status === "optimal" ? "bg-green-600" : ""
                        }
                      >
                        {zone.efficiency}%
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          zone.status === "optimal"
                            ? "bg-green-600"
                            : "bg-yellow-600"
                        }`}
                        style={{ width: `${zone.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {zone.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hourly Chart Simulation */}
            <div className="mt-8 pt-6 border-t">
              <h4 className="font-semibold mb-4">
                Consumo por Hora (Últimas 24h)
              </h4>
              <div className="flex items-end justify-between h-40 gap-2">
                {hourlyConsumption.map((data) => (
                  <div
                    key={data.hour}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-full bg-blue-600 rounded-t"
                      style={{ height: `${(data.consumption / 20) * 100}%` }}
                    >
                      <div className="text-xs text-white text-center pt-1">
                        {data.consumption}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">{data.hour}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Recomendaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className={`p-4 rounded-lg border-l-4 ${
                  rec.priority === "high"
                    ? "border-red-500 bg-red-50"
                    : "border-yellow-500 bg-yellow-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{rec.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      rec.priority === "high"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }
                  >
                    {rec.priority === "high" ? "ALTA" : "MEDIA"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600">
                    Ahorro: {rec.savings}
                  </span>
                  <Button size="sm" variant="outline">
                    Aplicar
                  </Button>
                </div>
              </div>
            ))}

            {/* Energy Saving Mode */}
            <div className="pt-4 border-t">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Modo Ahorro Energético</span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Precalentamiento Inteligente
                  </span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Standby Automático</span>
                  <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis de Costos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <div className="text-2xl font-bold">142 h</div>
              <div className="text-sm text-gray-600">Tiempo Activo (Mes)</div>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">1,250 kWh</div>
              <div className="text-sm text-gray-600">Consumo Total (Mes)</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">$187.50</div>
              <div className="text-sm text-gray-600">Costo Mensual</div>
            </div>
            <div className="text-center">
              <TrendingDown className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">$102</div>
              <div className="text-sm text-gray-600">Ahorro vs Estándar</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
