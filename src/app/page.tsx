
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const modules = [
  {
    id: 1,
    title: "Módulo 1: Essencial",
    description: "Fundamentos para iniciar sua jornada com o pé direito.",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "learning startup",
  },
  {
    id: 2,
    title: "Módulo 2: Avançado",
    description: "Aprofunde-se com técnicas e estratégias comprovadas.",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "strategy chess",
  },
  {
    id: 3,
    title: "Módulo 3: Ferramentas",
    description: "Domine as ferramentas do mercado e aplique as melhores práticas.",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "tools workshop",
  },
  {
    id: 4,
    title: "Módulo 4: Crescimento",
    description: "Descubra como escalar seus resultados e otimizar processos.",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "growth chart",
  },
  {
    id: 5,
    title: "Módulo 5: Sucesso",
    description: "Inspire-se com exemplos reais e aprenda com quem já venceu.",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "success trophy",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Bem-Vinda(o) ao Desconecta!</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2">Acesse o conteúdo abaixo e deixe a magia acontecer!</p>
      </div>

      <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 pt-2 px-4 scroll-smooth snap-x snap-mandatory 
                      animate-in fade-in slide-in-from-bottom-5 duration-700">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className="w-[220px] min-w-[220px] sm:w-[240px] sm:min-w-[240px] md:w-[260px] md:min-w-[260px] 
                       flex-shrink-0 snap-center shadow-xl rounded-lg bg-card border-border/50 
                       flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl group"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-lg md:text-xl font-headline text-primary group-hover:text-primary/90 transition-colors truncate">
                {module.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col items-center">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={module.imageUrl}
                  alt={`Capa do ${module.title}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={module.imageHint}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted-foreground p-4 text-center flex-grow">
                {module.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 mt-auto border-t border-border/20">
              <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Acessar Módulo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
