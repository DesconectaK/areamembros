
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full pt-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-1">
            <ListChecks size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-2xl font-headline">Atividades</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h2 className="text-center text-xl font-headline font-bold text-primary mt-2 mb-8">
            Explore diversas atividades e recursos
          </h2>
          <p className="text-md text-foreground mb-6 px-4">
            Aqui você encontrará mais atividades e funcionalidades interativas para o aprendizado.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
