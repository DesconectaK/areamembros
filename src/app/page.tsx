
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Dados de exemplo para as atividades
const activities = [
  {
    id: "activity-1",
    title: "Pintura Criativa com Guache",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "kids painting art",
  },
  {
    id: "activity-2",
    title: "Caça ao Tesouro no Jardim",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "children treasure hunt",
  },
  {
    id: "activity-3",
    title: "Teatro de Fantoches Reciclados",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "puppet show crafts",
  },
  {
    id: "activity-4",
    title: "Origami: Dobraduras Divertidas",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "origami paper craft",
  },
  {
    id: "activity-5",
    title: "Culinária: Cookies Coloridos",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "kids baking cookies",
  },
  {
    id: "activity-6",
    title: "Construindo Fortes com Lençóis",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "kids fort building",
  },
  {
    id: "activity-7",
    title: "Experimentos Científicos Simples",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "science experiments kids",
  },
  {
    id: "activity-8",
    title: "Música com Instrumentos Caseiros",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "diy musical instruments",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Bem-Vinda(o) ao Desconecta!</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2">Acesse o conteúdo abaixo e veja a magia acontecer.</p>
      </div>

      <section className="space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground px-1">
          100 ATIVIDADES
        </h2>
        <div className="relative">
          <div 
            className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 pt-2 px-1 scroll-smooth snap-x snap-mandatory 
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {activities.map((activity) => (
              <Link 
                href={`/activities/${activity.id}`} 
                key={activity.id} 
                className="flex-shrink-0 snap-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                aria-label={`Acessar ${activity.title}`}
              >
                <Card
                  className="w-[170px] min-w-[170px] sm:w-[180px] sm:min-w-[180px] md:w-[200px] md:min-w-[200px]
                             bg-card rounded-lg shadow-lg overflow-hidden border-border/50
                             transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-full aspect-[2/3]">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      fill
                      data-ai-hint={activity.imageHint}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-card-foreground truncate group-hover:text-primary transition-colors duration-200">
                      {activity.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
             {/* Adicionando um espaçador no final para melhor visualização da sombra do último card */}
            <div className="flex-shrink-0 w-1 h-1 snap-end"></div>
          </div>
        </div>
      </section>
      
      {/* Você pode adicionar mais seções como a de cima aqui, se necessário */}

    </div>
  );
}
