
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, ShoppingCart } from "lucide-react";
import Image from "next/image";

const upsellProducts = [
  {
    id: "upsell-1",
    title: "GUIA PARA PAIS",
    description: "Rotina caótica e telas demais? Transforme sua família! Este guia traz atividades offline e metas claras para mais foco, união e menos distrações. Recupere o tempo de qualidade!",
    price: "R$ 4,90",
    imageUrl: "/images/upguia.png",
    imageHint: "guia pais",
    comingSoon: false,
  },
  {
    id: "upsell-2",
    title: "CALENDARIO PERSONALIZADO",
    description: "Dificuldade em equilibrar a casa? O Método Premium é a chave! Engaje as crianças, reduza telas sem estresse e crie uma rotina familiar conectada e saudável. Sua família merece!",
    price: "R$ 4,90",
    imageUrl: "/images/upcalendario.png",
    imageHint: "calendario personalizado",
    comingSoon: false,
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
              Achou que tinha acabado? Já são seus!
            </CardTitle>
          </div>
          <CardDescription className="text-center text-sm md:text-base text-muted-foreground pt-1">
            Dicas valiosas que qualquer pai e mãe precisam ter, sem sombra de dúvidas!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-2">
          {upsellProducts.map((product) => (
            <Card key={product.id} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <div className="w-full md:w-[150px] lg:w-[180px] flex-shrink-0">
                    <Image
                      src={product.imageUrl}
                      alt={`Preview do ${product.title}`}
                      width={180}
                      height={180}
                      className="rounded-lg object-cover w-full aspect-square border border-border/30 shadow-sm"
                      data-ai-hint={product.imageHint}
                      unoptimized={product.imageUrl.startsWith('https://placehold.co')}
                    />
                  </div>
                  <div className="flex-grow space-y-2 md:space-y-3 w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                      <p className="text-xl font-bold text-primary">
                        {product.price}
                      </p>
                      <Button disabled={product.comingSoon} size="sm" className="w-full sm:w-auto">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {product.comingSoon ? "Em Breve" : "Saiba Mais"}
                      </Button>
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
