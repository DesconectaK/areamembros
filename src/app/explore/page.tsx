"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpsellProduct {
  id: string;
  title: string;
  description: string;
  type: 'whatsapp';
  posterUrl: string; 
  ctaText: string;
  checkoutUrl?: string; 
  aspectRatioClass?: string; 
  imageHint?: string; 
}

const upsellProducts: UpsellProduct[] = [
  {
    id: "whatsapp-community",
    title: "PARTICIPE DO NOSSO GRUPO",
    description: "Troque experiências, tire dúvidas e receba apoio em nosso grupo exclusivo no WhatsApp. Um espaço para crescermos juntos na jornada da maternidade.",
    type: 'whatsapp',
    posterUrl: "/images/whats.png",
    ctaText: "ENTRAR NO GRUPO",
    checkoutUrl: "https://chat.whatsapp.com/DNpAABIB0XP3azzfdMkxZA?mode=ac_t",
    aspectRatioClass: "aspect-video",
    imageHint: "whatsapp logo",
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
              Explorar
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-2">
          {upsellProducts.map((product) => (
            <Card key={product.id} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Image section for WhatsApp */}
                  <div className={cn("w-full md:w-[280px] lg:w-[320px] flex-shrink-0 relative", product.aspectRatioClass)}>
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
                  </div>

                  {/* Content section */}
                  <div className="flex-grow space-y-2 md:space-y-3 w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
                      {product.checkoutUrl ? (
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
