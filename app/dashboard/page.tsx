import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Ingresos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$24.8K</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,284</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversiones</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">6.2%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Este es el contenido principal del dashboard con la estructura de
            sidebar + topbar.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}