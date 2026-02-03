import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, CheckCircle2, AlertTriangle, Activity } from "lucide-react";

export default function SPC() {
  const processWindows = [
    {
      variable: "Cojín de Inyección",
      valor: 4.52,
      limiteInf: 4.2,
      limiteSup: 4.8,
      estado: "DENTRO",
    },
    {
      variable: "Tiempo de Inyección",
      valor: 1.24,
      limiteInf: 1.1,
      limiteSup: 1.4,
      estado: "DENTRO",
    },
    {
      variable: "Presión Máxima",
      valor: 145.2,
      limiteInf: 140.0,
      limiteSup: 150.0,
      estado: "DENTRO",
    },
    {
      variable: "Temperatura Fundido",
      valor: 242.5,
      limiteInf: 240.0,
      limiteSup: 245.0,
      estado: "DENTRO",
    },
  ];

  // Data for X-R Chart
  const xBarData = Array.from({ length: 30 }, (_, i) => ({
    x: i,
    value: 144.5 + Math.sin(i * 0.3) * 1.2 + (Math.random() - 0.5) * 0.8,
  }));

  const rData = Array.from({ length: 30 }, (_, i) => ({
    x: i,
    value: 1.2 + Math.sin(i * 0.4) * 0.3 + Math.random() * 0.2,
  }));

  // Histogram data
  const histogramData = [
    { range: "LIE (130.5)", value: 5, color: "bg-gray-300" },
    { range: "135", value: 45, color: "bg-blue-300" },
    { range: "138", value: 85, color: "bg-blue-400" },
    { range: "141", value: 100, color: "bg-blue-500" },
    { range: "μ (143.1)", value: 95, color: "bg-blue-600" },
    { range: "145", value: 85, color: "bg-blue-500" },
    { range: "148", value: 50, color: "bg-blue-400" },
    { range: "LSE (150.5)", value: 10, color: "bg-gray-300" },
  ];

  const maxHistValue = Math.max(...histogramData.map((d) => d.value));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Capítulo 10: SPC (Control Estadístico y Calidad)
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            EN CONTROL ESTADÍSTICO
          </Badge>
          <div className="text-sm">
            <span className="text-gray-600">ESTADO DE CALIDAD</span>
            <div className="font-bold text-green-600">Estable</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ESTADO DE CALIDAD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-600">99.2%</div>
              <span className="text-sm text-gray-600">OK</span>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "99.2%" }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              ÍNDICE CP / CPK
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              1.65 <span className="text-xl text-gray-400">/ 1.58</span>
            </div>
            <Badge className="bg-blue-600 text-white mt-2">
              CAPACIDAD ALTA (6X SIGMA)
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              PIEZAS ANALIZADAS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">500</div>
            <p className="text-sm text-gray-600 mt-1">Últimas 24 horas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              PROMEDIO DE CICLO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              12.42 <span className="text-lg text-gray-600">s</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">±0.06s</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* X-R Control Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                GRÁFICO DE CONTROL X-R (SECCIÓN 20.2)
              </CardTitle>
              <Badge variant="outline" className="text-sm">
                PRESIÓN DE INYECCIÓN
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* X-Bar Chart */}
            <div className="mb-8">
              <div className="text-xs text-gray-500 mb-2">
                GRÁFICO DE MEDIAS (X-BAR)
              </div>
              <div className="relative h-32 border-b border-l border-gray-300">
                {/* UCL Line */}
                <div className="absolute w-full border-t border-dashed border-red-400 top-2">
                  <span className="text-xs text-red-600 ml-2">UCL 146.5</span>
                </div>
                {/* Target Line */}
                <div className="absolute w-full border-t border-blue-500 top-16">
                  <span className="text-xs text-blue-600 ml-2">
                    Target 144.0
                  </span>
                </div>
                {/* LCL Line */}
                <div className="absolute w-full border-t border-dashed border-red-400 top-28">
                  <span className="text-xs text-red-600 ml-2">LCL 141.5</span>
                </div>
                {/* Data Points */}
                <svg className="absolute inset-0 w-full h-full">
                  <polyline
                    points={xBarData
                      .map(
                        (d) =>
                          `${(d.x / 30) * 100}%,${
                            ((146.5 - d.value) / 5) * 100
                          }%`,
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  {xBarData.map((d, i) => (
                    <circle
                      key={i}
                      cx={`${(d.x / 30) * 100}%`}
                      cy={`${((146.5 - d.value) / 5) * 100}%`}
                      r="3"
                      fill="#3b82f6"
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* R Chart */}
            <div>
              <div className="text-xs text-gray-500 mb-2">
                GRÁFICO DE RANGOS (R)
              </div>
              <div className="relative h-24 border-b border-l border-gray-300">
                {/* UCL Line */}
                <div className="absolute w-full border-t border-dashed border-red-400 top-2">
                  <span className="text-xs text-red-600 ml-2">UCL 2.4</span>
                </div>
                {/* Average Line */}
                <div className="absolute w-full border-t border-gray-500 top-12">
                  <span className="text-xs text-gray-600 ml-2">Avg 1.2</span>
                </div>
                {/* Data Points */}
                <svg className="absolute inset-0 w-full h-full">
                  <polyline
                    points={rData
                      .map(
                        (d) =>
                          `${(d.x / 30) * 100}%,${((2.4 - d.value) / 2.4) * 90}%`,
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Histogram */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                HISTOGRAMA Y DISTRIBUCIÓN (SECCIÓN 20.3)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-32 gap-1">
                {histogramData.map((data, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <div
                      className={`w-full rounded-t ${data.color}`}
                      style={{
                        height: `${(data.value / maxHistValue) * 100}%`,
                      }}
                    />
                    <div className="text-xs text-gray-600 text-center transform -rotate-45 origin-top-left mt-2">
                      {data.range}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Master Curve Analysis */}
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle className="text-white text-sm">
                ANÁLISIS DE CURVA MAESTRA (SECCIÓN 20.4)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-32 bg-gray-800 rounded-lg p-4">
                <svg className="w-full h-full">
                  {/* Ideal curve */}
                  <path
                    d="M 0 100 Q 50 50, 100 20 Q 150 10, 200 5"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  {/* Real-time curve */}
                  <path
                    d="M 0 100 Q 50 55, 100 25 Q 150 12, 200 8"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                  />
                  <text x="10" y="20" fill="#22d3ee" fontSize="10">
                    IDEAL
                  </text>
                  <text x="10" y="35" fill="#10b981" fontSize="10">
                    REAL-TIME
                  </text>
                </svg>
              </div>
              <div className="mt-3 text-xs">
                Ajuste de curva:{" "}
                <span className="text-green-400 font-bold">
                  98.5% de coincidencia
                </span>{" "}
                con perfil maestro configurado.
              </div>
            </CardContent>
          </Card>

          {/* Quality Alarms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                ALARMAS DE CALIDAD
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-green-700">
                    Sin tendencias de deriva
                  </div>
                  <div className="text-gray-600">
                    La media se mantiene estable en el...
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-yellow-50 rounded">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-yellow-700">
                    Alerta de dispersión
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Windows */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            VENTANAS DE PROCESO (SECCIÓN 10.2)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="text-left py-3 font-medium">
                    VARIABLE CRÍTICA
                  </th>
                  <th className="text-center py-3 font-medium">VALOR REAL</th>
                  <th className="text-center py-3 font-medium">
                    LÍMITE INFERIOR
                  </th>
                  <th className="text-center py-3 font-medium">
                    LÍMITE SUPERIOR
                  </th>
                  <th className="text-center py-3 font-medium">ESTADO</th>
                </tr>
              </thead>
              <tbody>
                {processWindows.map((row) => (
                  <tr key={row.variable} className="border-b hover:bg-gray-50">
                    <td className="py-4 font-medium">{row.variable}</td>
                    <td className="text-center font-bold text-blue-600">
                      {row.valor}
                    </td>
                    <td className="text-center text-gray-600">
                      {row.limiteInf}
                    </td>
                    <td className="text-center text-gray-600">
                      {row.limiteSup}
                    </td>
                    <td className="text-center">
                      <Badge className="bg-green-600 text-white">
                        {row.estado}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
