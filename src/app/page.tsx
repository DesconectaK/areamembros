
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    id: "activity-1",
    title: "100 ATIVIDADES CRIATIVAS",
    imageUrl: "/images/imagem-capa-modulo1.png",
    imageHint: "activity book cover",
    unoptimized: false,
  },
  {
    id: "activity-2",
    title: "50 BRINCADEIRAS CRIATIVAS",
    imageUrl: "/images/imagem-capa-modulo1.png", 
    imageHint: "children playing games",
    unoptimized: false, 
  },
  {
    id: "activity-3",
    title: "50 MODELOS PARA COLORIR",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "coloring pages art",
  },
  {
    id: "activity-4",
    title: "50 ATIVIDADES MUSICAIS",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "origami paper craft", // Note: This hint might be less relevant now, consider "musical notes kids" or similar if you change image
  },
  {
    id: "activity-5",
    title: "KIT TDAH/TEA",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "therapy activities",
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
  {
    id: "activity-9",
    title: "Jardinagem para Crianças",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "kids gardening nature",
  },
  {
    id: "activity-10",
    title: "Contação de Histórias Criativa",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "storytelling imagination",
  },
  {
    id: "activity-11",
    title: "Desenho Livre e Expressivo",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "children drawing art",
  },
  {
    id: "activity-12",
    title: "Modelagem com Massinha",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "playdough modeling kids",
  },
  {
    id: "activity-13",
    title: "Brincadeiras com Água",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "water play fun",
  },
  {
    id: "activity-14",
    title: "Dança e Movimento",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "kids dance movement",
  },
  {
    id: "activity-15",
    title: "Piquenique Divertido",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "family picnic food",
  },
  {
    id: "activity-16",
    title: "Explorando Texturas",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "sensory play textures",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Bem-vinda(o) ao Desconecta!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2">
          Acesse as atividades e veja a magia acontecer.
        </p>
      </div>

      <section className="space-y-2 animate-in fade-in slide-in-from-bottom-5 duration-700">
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
                aria-label={`Acessar atividade: ${activity.title}`}
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
                      unoptimized={activity.imageUrl.startsWith('https://placehold.co') ? undefined : (activity as any).unoptimized === true || (activity as any).unoptimized === false ? (activity as any).unoptimized : true}
                    />
                  </div>
                </Card>
              </Link>
            ))}
            <div className="flex-shrink-0 w-1 h-1 snap-end"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
