
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    id: "1", // Changed to string to match typical URL parameter usage
    title: "Módulo 1: 100 ATIVIDADES",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "kids activities",
  },
  {
    id: "2",
    title: "Módulo 2: 50 BRINCADEIRAS",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "children playing",
  },
  {
    id: "3",
    title: "Módulo 3: 50 MODELOS",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "creative templates",
  },
  {
    id: "4",
    title: "Módulo 4: KIT TDAH/TEA",
    imageUrl: "https://placehold.co/300x400.png",
    imageHint: "support learning",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Bem-Vinda(o) ao Desconecta!</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2">Acesse o conteúdo abaixo e veja a magia acontecer.</p>
      </div>

      <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 pt-2 px-4 scroll-smooth snap-x snap-mandatory
                      animate-in fade-in slide-in-from-bottom-5 duration-700">
        {modules.map((module) => (
          <Link href={`/modules/${module.id}`} key={module.id} className="flex-shrink-0 snap-center group" aria-label={`Acessar ${module.title}`}>
            <Card
              className="w-[220px] min-w-[220px] sm:w-[240px] sm:min-w-[240px] md:w-[260px] md:min-w-[260px]
                         shadow-xl rounded-lg bg-card border-border/50
                         flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl cursor-pointer"
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
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={module.imageHint}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
