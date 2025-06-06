import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <ListChecks size={48} className="text-primary" />
          </div>
          <CardTitle className="text-center text-2xl font-headline">Atividades</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Aqui você encontrará mais atividades e funcionalidades.
          </p>
           <div className="mt-6 flex justify-center">
            <img 
              src="https://placehold.co/300x200.png" 
              alt="Placeholder Image" 
              data-ai-hint="tasks productivity"
              className="rounded-lg shadow-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
