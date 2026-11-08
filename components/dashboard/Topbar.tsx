import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <p className="text-sm text-slate-500">Overview</p>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Buscar..."
          className="hidden w-64 md:flex"
        />

        <Button variant="outline">Notificaciones</Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200">
          AP
        </div>
      </div>
    </header>
  );
}