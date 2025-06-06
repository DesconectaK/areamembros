
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Dados de exemplo para as atividades
const activities = [
  {
    id: "activity-1",
    title: "Pintura Criativa com Guache", // Título ainda existe nos dados, mas não será exibido no card por agora
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
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Bem-vinda(o) ao Desconecta!</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2">Acesse o conteúdo abaixo e veja a magia acontecer.</p>
      </div>

      <section className="space-y-2 animate-in fade-in slide-in-from-bottom-5 duration-700">
        {/* O título da seção "100 ATIVIDADES" foi removido conforme solicitado */}
        <div className="relative">
          <div
            className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 pt-2 px-1 scroll-smooth snap-x snap-mandatory
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {activities.map((activity) => (
              <Link
                href={`/activities/${activity.id}`} // Ajuste esta rota conforme necessário para seus módulos
                key={activity.id}
                className="flex-shrink-0 snap-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                aria-label={`Acessar atividade: ${activity.title}`} // Mantido para acessibilidade, mesmo que o título não seja visual
              >
                <Card
                  className="w-[170px] min-w-[170px] sm:w-[180px] sm:min-w-[180px] md:w-[200px] md:min-w-[200px]
                             bg-card rounded-lg shadow-lg overflow-hidden border-border/50
                             transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-full aspect-[2/3]"> {/* Aspect ratio vertical */}
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title} // Mantido para acessibilidade
                      fill
                      data-ai-hint={activity.imageHint}
                      className="object-cover"
                    />
                  </div>
                  {/* A div com o título h3 foi removida conforme solicitado */}
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
