
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Image from "next/image";

type ActivityDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = params;

  // You would typically fetch activity details based on the ID here
  // For now, we'll just display the ID and a placeholder message.

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-full pt-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <FileText size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-3xl font-headline">
              Detalhes da Atividade
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Você está visualizando a atividade com ID: <span className="font-semibold text-primary">{id}</span>
          </p>
          <p className="mb-4">
            Aqui será exibido o conteúdo específico desta atividade/módulo.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src={`https://placehold.co/600x400.png`}
              alt={`Placeholder para atividade ${id}`}
              width={600}
              height={400}
              data-ai-hint="module content placeholder"
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Optional: If you have a known set of static paths, you can generate them at build time.
// export async function generateStaticParams() {
//   // Example: Fetch all activity IDs
//   // const activities = await fetch('/api/activities').then((res) => res.json())
//   // return activities.map((activity) => ({
//   //   id: activity.id,
//   // }))
//   // For now, returning an empty array as we don't have a predefined list in this context
//   return [];
// }
