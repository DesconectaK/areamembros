
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import VturbPlayer from "@/components/video/VturbPlayer"; // Import the VturbPlayer

interface UpsellProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  embedType: 'youtube' | 'vturb';
  videoUrl?: string; // For YouTube
  vturbVideoId?: string; // For Vturb
  vturbAccountId?: string; // For Vturb
  posterUrl: string;
  comingSoon: boolean;
  ctaText: string;
  checkoutUrl?: string;
}

const upsellProducts: UpsellProduct[] = [
  {
    id: "upsell-1",
    title: "GUIA PARA PAIS",
    description: "Este guia é a chave para transformar sua rotina. Em poucos passos, você aprenderá a reduzir o tempo de tela e, mais importante, a reconectar sua família de uma maneira mais saudável e significativa. Imagine um ambiente familiar com mais momentos de qualidade, aprendizado e diversão.",
    price: "R$ 37,90",
    embedType: 'vturb',
    vturbVideoId: '6845512fcc0bad7373a1cfda',
    vturbAccountId: '203430db-ad79-48e2-a8e6-4634be611b23',
    posterUrl: "https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/6845512fcc0bad7373a1cfda/thumbnail.jpg", // Vturb thumbnail
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/Z7mUpUjaYXDighCObLzk"
  },
  {
    id: "upsell-2",
    title: "CALENDÁRIO DE ATIVIDADES",
    description: "O Calendário Personalizado vai dar a você a estrutura que sua família precisa para crescer junta. Reduza o tempo de tela, organize atividades offline e veja o progresso a cada semana. Com metas claras e práticas divertidas, você vai sentir a diferença em dias – mais conexão, mais felicidade e muito menos estresse.",
    price: "R$ 27,90",
    embedType: 'youtube',
    videoUrl: "https://www.youtube.com/embed/dvsP8YFfA1E", // Correct YouTube link for calendar
    posterUrl: "/images/upcalendari.png",
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/1KTE48qlAOhObl9Mnb17"
  },
];

export default function ExplorePage() {
  const [showVideoPlayer, setShowVideoPlayer] = React.useState<Record<string, boolean>>({});

  const handlePlayClick = (productId: string) => {
    setShowVideoPlayer(prev => ({ ...prev, [productId]: true }));
  };

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
                  <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 relative">
                    {product.embedType === 'vturb' && product.vturbVideoId && product.vturbAccountId && (
                      <VturbPlayer
                        videoId={product.vturbVideoId}
                        thumbnailUrl={product.posterUrl} // VturbPlayer uses posterUrl as its thumbnail
                        vturbAccountId={product.vturbAccountId}
                        className="rounded-lg overflow-hidden border border-border/30 shadow-sm bg-muted aspect-video"
                      />
                    )}
                    {product.embedType === 'youtube' && product.videoUrl && (
                      <>
                        {!showVideoPlayer[product.id] ? (
                          <div
                            className="aspect-video w-full relative group cursor-pointer"
                            onClick={() => handlePlayClick(product.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePlayClick(product.id); }}
                            aria-label={`Play video for ${product.title}`}
                          >
                            <Image
                              src={product.posterUrl}
                              alt={`Poster para ${product.title}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, 320px"
                              className="rounded-lg object-cover border border-border/30 shadow-sm bg-muted"
                              data-ai-hint={product.title.toLowerCase().replace(/\s/g, ' ')}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg">
                              <div
                                className="bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                              >
                                <Play className="w-7 h-7 md:w-8 md:h-8 fill-primary-foreground" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video w-full">
                            <iframe
                              src={`${product.videoUrl}${product.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=0&modestbranding=1&rel=0&iv_load_policy=3`}
                              title={`Vídeo de apresentação para ${product.title}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="rounded-lg w-full h-full border border-border/30 shadow-sm bg-muted"
                            ></iframe>
                          </div>
                        )}
                      </>
                    )}
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
