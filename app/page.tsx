import { PricingCard } from "@/components/PricingCard"
import { ContactForm } from "@/components/ContactForm"
import { Sidebar } from "@/components/dashboard/Sidebar"

export default function Home() {
  return (
    <><main className="min-h-screen bg-background p-8 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Planes y Precios</h1>
        <p className="text-muted-foreground text-lg">Elige el plan perfecto para tus necesidades.</p>
      </div>

      {/* Grid responsivo: 1 columna en móvil, 3 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full items-center">

        <PricingCard
          title="Gratis"
          price="$0"
          description="Ideal para empezar y probar la plataforma."
          features={["Hasta 3 proyectos", "Acceso a la comunidad", "Soporte básico"]}
          buttonText="Empezar gratis" />

        <PricingCard
          title="Pro"
          price="$19"
          description="Para profesionales que necesitan más poder."
          features={["Proyectos ilimitados", "Soporte prioritario", "Analíticas avanzadas", "Exportación en PDF"]}
          isPopular={true}
          buttonText="Suscribirse a Pro" />

        <PricingCard
          title="Enterprise"
          price="$49"
          description="Para equipos grandes y empresas."
          features={["Todo lo de Pro", "Usuarios ilimitados", "Soporte 24/7", "SLA garantizado"]}
          buttonText="Contactar ventas" />

      </div>
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿No estás seguro de qué plan elegir?</h2>
        <p className="text-muted-foreground mb-6">Contáctanos y te ayudaremos a encontrar la mejor opción para ti.</p>
        <ContactForm />
      </section>
    </main></>

  )
}