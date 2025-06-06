
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const modules = [
  {
    id: 1,
    title: "Módulo 1: Introdução Essencial",
    description: "Comece sua jornada aqui. Aprenda os fundamentos e prepare-se para o sucesso.",
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "learning startup",
    bgColor: "bg-secondary/10",
  },
  {
    id: 2,
    title: "Módulo 2: Estratégias Avançadas",
    description: "Aprofunde seus conhecimentos com técnicas e estratégias comprovadas.",
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "strategy chess",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    title: "Módulo 3: Ferramentas & Práticas",
    description: "Domine as ferramentas do mercado e aplique as melhores práticas.",
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "tools workshop",
    bgColor: "bg-primary/5",
  },
  {
    id: 4,
    title: "Módulo 4: Crescimento & Otimização",
    description: "Descubra como escalar seus resultados e otimizar seus processos.",
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "growth chart",
    bgColor: "bg-secondary/15",
  },
  {
    id: 5,
    title: "Módulo 5: Casos de Sucesso",
    description: "Inspire-se com exemplos reais e aprenda com quem já alcançou o sucesso.",
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "success trophy",
    bgColor: "bg-accent/15",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold text-primary">Bem-vindo(a) à Plataforma!</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore os módulos abaixo para iniciar sua jornada.</p>
      </div>

      {modules.map((module) => (
        <Card key={module.id} className={`w-full shadow-xl overflow-hidden ${module.bgColor} border-border/50`}>
          <CardHeader className="p-6">
            <CardTitle className="text-2xl md:text-3xl font-headline text-primary">{module.title}</CardTitle>
            <CardDescription className="text-base md:text-lg text-foreground/80 pt-1">{module.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 md:p-6 md:pt-0">
            <div className="relative aspect-video w-full">
              <Image
                src={module.imageUrl}
                alt={`Imagem ilustrativa para ${module.title}`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={module.imageHint}
                className="rounded-b-lg md:rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
