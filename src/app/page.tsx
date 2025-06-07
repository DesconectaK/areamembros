
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

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
    <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 space-y-8">
      <div
        className="relative w-full aspect-[3/1] bg-muted rounded-lg border border-border/50 shadow-md overflow-hidden animate-in fade-in duration-500"
        aria-label="Banner Promocional"
      >
        <Image
          src="/banners/bannerp.png"
          alt="Banner promocional principal"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          data-ai-hint="banner principal"
          priority
        />
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
                             h-[255px] sm:h-[270px] md:h-[300px]
                             bg-card rounded-lg shadow-lg border-border/50
                             transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105 cursor-pointer
                             flex flex-col relative overflow-hidden"
                >
                  {activity.imageUrl ? (
                     <div className="relative w-full h-full">
                      <Image
                        src={activity.imageUrl}
                        alt={`Capa da atividade: ${activity.title}`}
                        fill
                        sizes="(max-width: 640px) 170px, (max-width: 768px) 180px, 200px"
                        className="object-contain transition-transform duration-300"
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
            <div className="flex-shrink-0 w-1 h-1 snap-end"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
