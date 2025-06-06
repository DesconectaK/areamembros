
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ActivityDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = params;

  // No futuro, você pode buscar dados específicos da atividade/módulo com base no 'id'
  // Exemplo: const activityData = await fetchActivityData(id);
  // E então usar activityData.description e activityData.pdfUrl

  const activityDescription = "Descubra atividades criativas que estimulam a imaginação e o aprendizado. Perfeitas para todas as idades, essas atividades oferecem diversão e desenvolvimento de habilidades de forma interativa e inspiradora.";
  const pdfUrl = "https://drive.google.com/file/d/1VcN-buTk52dZ7my3ipeW5SfTwVnh3ONj/view?usp=sharing";

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-full pt-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <FileText size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-3xl font-headline">
              100 ATIVIDADES CRIATIVAS
            </CardTitle>
          </div>
          <h2 className="text-center text-2xl font-headline font-bold text-primary">
            Quer transformar o aprendizado dos seus filhos?
          </h2>
        </CardHeader>
        <CardContent className="text-center">
          
          <p className="text-md text-foreground mt-4 mb-6 px-4">
            {activityDescription}
          </p>

          {pdfUrl !== "#" ? (
            <Button asChild className="mb-6">
              <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download size={20} className="mr-2" />
                Visualizar Atividades
              </Link>
            </Button>
          ) : (
            <Button disabled className="mb-6">
              <Download size={20} className="mr-2" />
              PDF Indisponível
            </Button>
          )}

          <p className="mb-4 text-sm text-muted-foreground">
            Abaixo, uma prévia do conteúdo.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src={`https://placehold.co/600x400.png`}
              alt={`Placeholder para atividade ${id}`}
              width={600}
              height={400}
              data-ai-hint="module content creative"
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
