import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Droplet,
  AlertTriangle,
  TrendingUp,
  Info,
} from "lucide-react";

export default function MantenimientoLubricacion() {
  const depositos = [
    {
      name: "GRASA MULTIUSO",
      percent: 88,
      color: "bg-blue-600",
      rest: "2.4 kg rest.",
      desc: "Cartucho: i-Glide Premium",
    },
    {
      name: "ACEITE HIDRO-LUB",
      percent: 32,
      color: "bg-yellow-400",
      rest: "0.8 L rest.",
      desc: "Circuito Bomba Vacío",
    },
  ];

  const intervenciones = [
    {
      name: "Limpieza de Husillos",
      date: "05 Sep 2024",
      type: "Mantenimiento Preventivo",
    },
    {
      name: "Recarga de Cartucho Grasa",
      date: "12 Ago 2024",
      type: "Consumibles",
    },
    {
      name: "Calibración Sensores Flujo",
      date: "30 Jul 2024",
      type: "Sistema Control",
    },
  ];

  const planificador = [
    {
      componente: "Husillo de Bolas - Cierre",
      nivel: 12,
      vida: "4,250 Horas",
      ciclos: "~1.2M Ciclos",
      accion: "MONITORIZACIÓN",
    },
    {
      componente: "Guías Lineales",
      nivel: 6,
      vida: "7,800 Horas",
      ciclos: "~2.1M Ciclos",
      accion: "REVISIÓN",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Capítulo 9: Mantenimiento y Lubricación
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            SISTEMA SALUDABLE
          </Badge>
          <div className="text-sm text-gray-600">
            HORA LOCAL
            <br />
            <span className="font-bold">14:32:10</span>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ESTADO MECÁNICO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-600">94%</div>
              <span className="text-gray-600">Salud</span>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "94%" }}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              PRÓXIMO SERVICE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              124 <span className="text-lg text-gray-600">Horas</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Estimado: 12 Oct 2024
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              CONSUMO LUBRICANTE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">Óptimo</div>
            <div className="text-xs text-gray-500 mt-1">
              0.45 ml/ciclo promedio
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              EFICIENCIA MECÁNICA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-600">98.2%</div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-xs text-green-600 mt-1">
              ↑ 1.2% vs semana anterior
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gemelo Digital de Lubricación */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="w-5 h-5 text-blue-600" />
              GEMELO DIGITAL DE LUBRICACIÓN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
              <svg width="320" height="180" className="mb-4">
                <rect
                  x="40"
                  y="40"
                  width="240"
                  height="100"
                  rx="16"
                  fill="#f3f4f6"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                {/* Cierre */}
                <circle cx="80" cy="90" r="10" fill="#fbbf24" />
                <text
                  x="80"
                  y="115"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#64748b"
                >
                  CIERRE
                </text>
                {/* Inyección */}
                <circle cx="240" cy="90" r="10" fill="#4ade80" />
                <text
                  x="240"
                  y="115"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#64748b"
                >
                  INYECCIÓN
                </text>
                {/* Otros puntos */}
                <circle cx="120" cy="70" r="8" fill="#22d3ee" />
                <circle cx="200" cy="120" r="8" fill="#22d3ee" />
              </svg>
              <div className="flex gap-4 mt-2">
                <Badge className="bg-green-600 text-white">CORRECTO</Badge>
                <Badge className="bg-yellow-400 text-white">ALERTA</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Niveles de Depósito */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                NIVELES DE DEPÓSITO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {depositos.map((dep) => (
                <div key={dep.name} className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full ${dep.color}`} />
                    <span className="font-semibold text-xs">{dep.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2/3 bg-gray-200 rounded-full h-2">
                      <div
                        className={`${dep.color} h-2 rounded-full`}
                        style={{ width: `${dep.percent}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {dep.percent}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{dep.desc}</div>
                  <div className="text-xs font-bold text-blue-600">
                    {dep.rest}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Historial de Intervenciones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                HISTORIAL DE INTERVENCIONES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-4">
                {intervenciones.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <span className="font-semibold text-blue-700">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {item.date}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {item.type}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-2">
                VER TODO EL HISTORIAL
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Planificador Predictivo y Control Manual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Planificador Predictivo */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              PLANIFICADOR PREDICTIVO (SECCIÓN 19.4)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="text-left py-2">COMPONENTE</th>
                  <th className="text-center py-2">NIVEL DESGASTE</th>
                  <th className="text-center py-2">VIDA REMANENTE</th>
                  <th className="text-center py-2">PRÓXIMA ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {planificador.map((row) => (
                  <tr
                    key={row.componente}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 font-medium">{row.componente}</td>
                    <td className="text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${row.nivel * 8}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {row.nivel}%
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="font-bold text-blue-600">{row.vida}</div>
                      <div className="text-xs text-gray-400">{row.ciclos}</div>
                    </td>
                    <td className="text-center">
                      <Badge className="bg-green-600 text-white">
                        {row.accion}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Control Manual */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              CONTROL MANUAL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-sm">
              Ejecutar una purga manual forzará un ciclo completo de lubricación
              en todos los nodos listados.
            </div>
            <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold">
              INICIAR PURGA MANUAL
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
