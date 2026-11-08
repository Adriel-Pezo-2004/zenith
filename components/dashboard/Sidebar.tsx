import Link from "next/link";``


const navItems = [
  { label: "Dashboard", icon: "LayoutGrid", href: "/dashboard" },
  { label: "Proyectos", icon: "Folder", href: "/dashboard/projects" },
  { label: "Facturación", icon: "CreditCard", href: "/dashboard/billing" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-white lg:flex lg:flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">Zenith</h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}