
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const activities = [
  {
    id: "activity-1",
    title: "100 ATIVIDADES CRIATIVAS",
    imageUrl: "/images/capaatividades.png",
    imageHint: "atividades criativas",
  },
  {
    id: "activity-2",
    title: "50 BRINCADEIRAS CRIATIVAS",
    imageUrl: "/images/capabrincadeiras.png",
    imageHint: "brincadeiras criativas",
  },
  {
    id: "activity-3",
    title: "50 MODELOS PARA COLORIR",
    imageUrl: "/images/capacolorir.png",
    imageHint: "modelos colorir",
  },
  {
    id: "activity-4",
    title: "50 ATIVIDADES MUSICAIS",
    imageUrl: "/images/capamusicas.png",
    imageHint: "atividades musicais",
  },
  {
    id: "activity-5",
    title: "KIT TDAH/TEA",
    imageUrl: "/images/capaautismo.png",
    imageHint: "kit autismo",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 space-y-8">
      <section
        aria-label="Seção de boas-vindas com logo e descrição"
        className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-6 bg-black rounded-lg shadow-md border border-border/50 animate-in fade-in duration-500"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Logo Método Desconecta"
            fill
            sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
            className="object-contain"
            data-ai-hint="logo desconecta"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 font-headline">
            Bem-vinda(o)!
          </h1>
          <p className="text-base md:text-lg text-primary-foreground">
            Um mundo melhor, onde vivemos sem telas. Dê ao seu filho a infância dos sonhos!
          </p>
        </div>
      </section>

      <section className="space-y-2 animate-in fade-in slide-in-from-bottom-5 duration-700 relative">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-10 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="relative">
          <div
            className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 pt-2 scroll-smooth snap-x snap-mandatory snap-center
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap px-1"
          >
            {activities.map((activity) => (
              <Link
                href={`/activities/${activity.id}`}
                key={activity.id}
                className="flex-shrink-0 snap-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                aria-label={`Acessar atividade: ${activity.title}`}
              >
                <Card
                  className="w-[200px] min-w-[200px] sm:w-[220px] sm:min-w-[220px] md:w-[240px] md:min-w-[240px]
                             h-[300px] sm:h-[330px] md:h-[360px]
                             bg-card rounded-lg shadow-lg border-border/50
                             transition-all duration-300 ease-in-out
                             group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-1
                             group-focus-visible:scale-105 group-focus-visible:-translate-y-1 group-focus-visible:shadow-2xl
                             cursor-pointer
                             flex flex-col relative overflow-hidden"
                >
                  {activity.imageUrl ? (
                     <div className="relative w-full h-full">
                      <Image
                        src={activity.imageUrl}
                        alt={`Capa da atividade: ${activity.title}`}
                        fill
                        sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 240px"
                        className="object-cover transition-transform duration-300"
                        data-ai-hint={activity.imageHint || "atividade infantil"}
                        unoptimized={activity.imageUrl.startsWith('https://placehold.co')}
                      />
                    </div>
                  ) : (
                    <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {activity.title}
                      </h3>
                    </div>
                  )}
                </Card>
              </Link>
            ))}
            <div className="flex-shrink-0 w-1 h-1 snap-end"></div> {/* Small element to ensure last item snaps correctly */}
          </div>
        </div>
      </section>
    </div>
  );
}
