
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

  const activityTitle = "Módulo Incrível"; // Placeholder - pode ser dinâmico
  const activityDescription = "Esta é uma breve descrição do conteúdo fantástico que você encontrará neste módulo. Prepare-se para aprender e se inspirar!"; // Placeholder - pode ser dinâmico
  const pdfUrl = "https://drive.google.com/file/d/1QOnpnLQl8rYjIzkDsxfBd1vc3I5Uht8F/view?usp=drive_link"; // URL do PDF fornecida

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-full pt-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <FileText size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-3xl font-headline">
              {/* Poderia ser dinâmico com base no ID, ex: activityData.title */}
              Detalhes da Atividade: {activityTitle}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground mb-2">
            Você está visualizando a atividade com ID: <span className="font-semibold text-primary">{id}</span>
          </p>
          
          <p className="text-md text-foreground mt-4 mb-6 px-4">
            {/* Poderia ser dinâmico, ex: activityData.description */}
            {activityDescription}
          </p>

          {pdfUrl !== "#" ? (
            <Button asChild className="mb-6">
              <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download size={20} className="mr-2" />
                Visualizar PDF do Módulo
              </Link>
            </Button>
          ) : (
            <Button disabled className="mb-6">
              <Download size={20} className="mr-2" />
              PDF Indisponível
            </Button>
          )}

          <p className="mb-4 text-sm text-muted-foreground">
            Abaixo, uma prévia ou imagem relacionada ao conteúdo do módulo.
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
