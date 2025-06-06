import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Compass size={48} className="text-primary" />
          </div>
          <CardTitle className="text-center text-2xl font-headline">Explorar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Descubra novas seções e conteúdos para explorar.
          </p>
           <div className="mt-6 flex justify-center">
            <img 
              src="https://placehold.co/300x200.png" 
              alt="Placeholder Image" 
              data-ai-hint="adventure map"
              className="rounded-lg shadow-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
