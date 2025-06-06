
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full pt-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-1">
            <Compass size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-2xl font-headline">Explorar</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h2 className="text-center text-xl font-headline font-bold text-primary mt-2 mb-8">
            Navegue por novos conteúdos e funcionalidades
          </h2>
          <p className="text-md text-foreground mb-6 px-4">
            Descubra novas seções e materiais preparados para enriquecer sua experiência.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
