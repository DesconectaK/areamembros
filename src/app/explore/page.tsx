
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import VturbPlayer from "@/components/video/VturbPlayer";

interface UpsellProduct {
  id: string;
  title: string;
  description: string;
  price?: string; // Tornou-se opcional
  type: 'video' | 'whatsapp'; // Novo campo para diferenciar
  embedType?: 'youtube' | 'vturb'; // Apenas para type 'video'
  videoUrl?: string; // Apenas para type 'video' (YouTube)
  vturbVideoId?: string; // Apenas para type 'video' (Vturb)
  vturbAccountId?: string; // Apenas para type 'video' (Vturb)
  posterUrl: string; // Obrigatório: thumbnail para vídeo ou imagem para WhatsApp
  comingSoon: boolean;
  ctaText: string;
  checkoutUrl?: string; // URL de checkout ou link do WhatsApp
  aspectRatioClass?: string; // Usado para imagem/vídeo
  imageHint?: string; // Para data-ai-hint
}

const upsellProducts: UpsellProduct[] = [
  {
    id: "upsell-1",
    title: "GUIA ESSENCIAL PARA PAIS",
    description: "Você está a um passo de ter paz dentro de casa.\nEsse guia salvou a rotina de centenas de famílias.\nAcabou o grito, a culpa, o cansaço.\nComeçou a leveza, o tempo de qualidade, a conexão real.",
    price: "R$ 37,90",
    type: 'video',
    embedType: 'vturb',
    vturbVideoId: '684594984440c57b2970977a',
    vturbAccountId: '203430db-ad79-48e2-a8e6-4634be611b23',
    posterUrl: "https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684594984440c57b2970977a/thumbnail.jpg",
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/Z7mUpUjaYXDighCObLzk",
    aspectRatioClass: "aspect-video", // 16:9 for Vturb as per new embed
    imageHint: "guia pais",
  },
  {
    id: "upsell-2",
    title: "CALENDÁRIO DE ATIVIDADES",
    description: "Você não precisa mais inventar.\nEsse calendário tira sua família do piloto automático.\nAtividades prontas, semana a semana.\nNada de improviso.\nTudo pensado pra gerar conexão.\nSeu filho irá trocar a tela pelo riso!",
    price: "R$ 27,90",
    type: 'video',
    embedType: 'youtube',
    videoUrl: "https://www.youtube.com/embed/dvsP8YFfA1E",
    posterUrl: "/images/upcalendari.png",
    comingSoon: false,
    ctaText: "EU QUERO!",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/1KTE48qlAOhObl9Mnb17",
    aspectRatioClass: "aspect-video",
    imageHint: "calendario atividades",
  },
  {
    id: "whatsapp-community",
    title: "PARTICIPE DO NOSSO GRUPO",
    description: "Troque experiências, tire dúvidas e receba apoio em nosso grupo exclusivo no WhatsApp. Um espaço para crescermos juntos na jornada da paternidade e maternidade.",
    type: 'whatsapp',
    posterUrl: "/images/whats.png",
    comingSoon: false,
    ctaText: "ENTRAR NO GRUPO",
    checkoutUrl: "https://chat.whatsapp.com/JvnX060vFtJJ4qxomS7Fmh",
    aspectRatioClass: "aspect-video",
    imageHint: "whatsapp logo",
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
            Conteúdos e comunidade para transformar sua família.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-2">
          {upsellProducts.map((product) => (
            <Card key={product.id} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Seção de Mídia (Vídeo ou Imagem para WhatsApp) */}
                  <div className={cn("w-full md:w-[280px] lg:w-[320px] flex-shrink-0 relative", product.aspectRatioClass)}>
                    {product.type === 'video' && product.embedType === 'vturb' && product.vturbVideoId && product.vturbAccountId && (
                      <VturbPlayer
                        videoId={product.vturbVideoId}
                        thumbnailUrl={product.posterUrl}
                        vturbAccountId={product.vturbAccountId}
                        className={cn("rounded-lg overflow-hidden border border-border/30 shadow-sm w-full h-full", product.aspectRatioClass)}
                      />
                    )}
                    {product.type === 'video' && product.embedType === 'youtube' && product.videoUrl && (
                      <>
                        {!showVideoPlayer[product.id] ? (
                          <div
                            className={cn("w-full h-full relative group cursor-pointer", product.aspectRatioClass)}
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
                              className="rounded-lg object-cover border border-border/30 shadow-sm"
                              data-ai-hint={product.imageHint || product.title.toLowerCase().replace(/\s/g, ' ')}
                              unoptimized={product.posterUrl.startsWith('https://placehold.co')}
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
                          <div className={cn("w-full h-full", product.aspectRatioClass)}>
                            <iframe
                              src={`${product.videoUrl}${product.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=0&modestbranding=1&rel=0&iv_load_policy=3`}
                              title={`Vídeo de apresentação para ${product.title}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="rounded-lg w-full h-full border border-border/30 shadow-sm"
                            ></iframe>
                          </div>
                        )}
                      </>
                    )}
                    {product.type === 'whatsapp' && (
                       <div className={cn("w-full h-full relative group", product.aspectRatioClass)}>
                        <Image
                          src={product.posterUrl}
                          alt={`Imagem para ${product.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, 320px"
                          className="rounded-lg object-cover border border-border/30 shadow-sm"
                          data-ai-hint={product.imageHint || product.title.toLowerCase().replace(/\s/g, ' ')}
                          unoptimized={product.posterUrl.startsWith('https://placehold.co') || product.posterUrl.startsWith('/images/')}
                        />
                      </div>
                    )}
                  </div>

                  {/* Seção de Conteúdo (Título, Descrição, Preço, CTA) */}
                  <div className="flex-grow space-y-2 md:space-y-3 w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {product.description}
                    </p>
                    <div className={cn(
                        "flex flex-col sm:flex-row sm:items-center gap-3 pt-2",
                        product.price ? "sm:justify-between" : "sm:justify-end" // Ajusta alinhamento se não houver preço
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
                          <Button size="sm" className="w-full font-bold">
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

    