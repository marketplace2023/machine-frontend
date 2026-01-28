import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Molde() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Molde</h1>
        <p className="text-gray-600">Gestión y configuración de moldes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">
              Molde Activo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Nombre:</span>
                <span className="font-bold text-gray-800">Molde 001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estado:</span>
                <span className="text-green-600 font-medium">
                  En Producción
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ciclos:</span>
                <span className="font-bold text-gray-800">1,245</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Información</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Temperatura:</span>
                <span className="font-bold text-gray-800">245°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Presión:</span>
                <span className="font-bold text-gray-800">850 bar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tiempo Ciclo:</span>
                <span className="font-bold text-gray-800">12.4s</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Rendimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">OEE:</span>
                <span className="font-bold text-gray-800">91.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Disponibilidad:</span>
                <span className="font-bold text-gray-800">95.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Calidad:</span>
                <span className="font-bold text-gray-800">98.1%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            Acciones de Molde
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Configurar Molde
          </Button>
          <Button
            variant="secondary"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Ver Historial
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Mantenimiento
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Reportes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
