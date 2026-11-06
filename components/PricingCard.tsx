import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Definimos las props para que la tarjeta sea reutilizable
interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col w-full max-w-sm ${isPopular ? "border-primary shadow-lg scale-105" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          {isPopular && <Badge variant="default">Más Popular</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline text-4xl font-extrabold">
          {price}
          <span className="ml-1 text-xl font-medium text-muted-foreground">/mes</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <ul className="space-y-3 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}