import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"   
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
            <form className="space-y-4">
                <div>
                    <Label htmlFor="name" className="block mb-1">Nombre</Label>
                    <Input id="name" type="text" placeholder="Tu nombre" required />
                </div>
                <div>
                    <Label htmlFor="email" className="block mb-1">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="Tu correo electrónico" required />          
                </div>
                <div>
                    <Label htmlFor="message" className="block mb-1">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí..." required />
                </div>
                <Button type="submit" className="w-full">Enviar</Button>
            </form>
        </div>    
    );
}