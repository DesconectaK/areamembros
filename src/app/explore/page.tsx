
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const upsellProducts = [
  {
    id: "upsell-1",
    title: "GUIA PARA PAIS",
    description: "Este guia é a chave para transformar sua rotina. Em poucos passos, você aprenderá a reduzir o tempo de tela e, mais importante, a reconectar sua família de uma maneira mais saudável e significativa. Imagine um ambiente familiar com mais momentos de qualidade, aprendizado e diversão.",
    price: "R$ 37,90",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    posterUrl: "/images/upguia.png", 
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/Z7mUpUjaYXDighCObLzk"
  },
  {
    id: "upsell-2",
    title: "CALENDÁRIO DE ATIVIDADES/METAS",
    description: "O Calendário Personalizado vai dar a você a estrutura que sua família precisa para crescer junta. Reduza o tempo de tela, organize atividades offline e veja o progresso a cada semana. Com metas claras e práticas divertidas, você vai sentir a diferença em dias – mais conexão, mais felicidade e muito menos estresse.",
    price: "R$ 27,90",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    posterUrl: "/images/upcalendari.png", 
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/1KTE48qlAOhObl9Mnb17"
  },
];

export default function ExplorePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 space-y-8 min-h-full">
      <Card className="w-full shadow-xl border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center mb-2">
            <Compass size={40} className="text-primary mr-3" />
            <CardTitle className="text-center text-2xl md:text-3xl font-headline">
              Acredite, é para você!
            </CardTitle>
          </div>
          <CardDescription className="text-center text-sm md:text-base text-muted-foreground pt-1">
            O Guia e o Calendário que toda a família DEVE ter.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-2">
          {upsellProducts.map((product) => (
            <Card key={product.id} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <div className="w-full md:w-[180px] lg:w-[200px] flex-shrink-0">
                    <video
                      src={product.videoUrl}
                      poster={product.posterUrl}
                      controls
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square border border-border/30 shadow-sm bg-muted" 
                      aria-label={`Vídeo de apresentação para ${product.title}`}
                    >
                      Seu navegador não suporta o elemento de vídeo. Você pode tentar acessá-lo <Link href={product.videoUrl} className="underline">diretamente aqui</Link>.
                    </video>
                  </div>
                  <div className="flex-grow space-y-2 md:space-y-3 w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className={cn(
                        "flex flex-col sm:flex-row sm:items-center gap-3 pt-2",
                        product.price ? "sm:justify-between" : "sm:justify-end"
                      )}
                    >
                      {product.price && (
                        <p className="text-xl font-bold text-primary">
                          {product.price}
                        </p>
                      )}
                      {product.comingSoon ? (
                        <Button disabled={true} size="sm" className="w-full sm:w-auto">
                          Em Breve
                        </Button>
                      ) : product.checkoutUrl ? (
                        <Link href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <Button size="sm" className="w-full">
                            {product.ctaText}
                          </Button>
                        </Link>
                      ) : (
                        <Button disabled={true} size="sm" className="w-full sm:w-auto">
                           {product.ctaText}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
