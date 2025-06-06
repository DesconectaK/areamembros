
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, AlertTriangle } from "lucide-react";
import Link from "next/link";

type ActivityDetailPageProps = {
  params: {
    id: string;
  };
};

interface ActivityContent {
  title: string;
  subheadline: string;
  description: string;
  pdfUrl: string;
}

const activitiesData: Record<string, ActivityContent> = {
  "activity-1": {
    title: "100 ATIVIDADES CRIATIVAS",
    subheadline: "Quer transformar o aprendizado dos seus filhos?",
    description: "Descubra atividades criativas que vão além do comum, estimulando a imaginação e o desenvolvimento das crianças. Materiais pensados para criar momentos de aprendizado e diversão em família.",
    pdfUrl: "https://drive.google.com/file/d/1VcN-buTk52dZ7my3ipeW5SfTwVnh3ONj/view?usp=sharing",
  },
  "activity-2": {
    title: "50 BRINCADEIRAS CRIATIVAS",
    subheadline: "Que tal se divertir com brincadeiras criativas?",
    description: "Explore brincadeiras que estimulam a imaginação e ajudam no aprendizado. Perfeitas para todas as idades, essas brincadeiras são uma forma divertida de desenvolver habilidades e criar momentos inesquecíveis em família.",
    pdfUrl: "https://drive.google.com/file/d/1QOnpnLQl8rYjIzkDsxfBd1vc3I5Uht8F/view?usp=sharing",
  },
  "activity-3": {
    title: "50 MODELOS PARA COLORIR",
    subheadline: "Prontos para dar vida com cores?",
    description: "Descubra modelos para colorir que estimulam a criatividade e a coordenação. Perfeitos para todas as idades, esses modelos oferecem uma maneira divertida de explorar cores e formas enquanto se aprende e se diverte.",
    pdfUrl: "https://drive.google.com/file/d/1j6WhKrXEHSZAh--RsxJQMv0STNMVQhsd/view?usp=sharing",
  },
};

const defaultActivityContent: ActivityContent = {
  title: "Atividade em Preparação",
  subheadline: "Conteúdo exclusivo chegando em breve!",
  description: "Estamos preparando materiais incríveis para esta seção. Volte em breve para conferir as novidades.",
  pdfUrl: "#",
};

export default function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = params;
  const activityContent = activitiesData[id] || defaultActivityContent;
  
  const { 
    title: activityTitle, 
    subheadline: activitySubheadline, 
    description: activityDescription, 
    pdfUrl 
  } = activityContent;

  if (!activitiesData[id]) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full pt-8">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-center mb-1">
              <AlertTriangle size={48} className="text-destructive mr-3" />
              <CardTitle className="text-center text-3xl font-headline">
                Atividade Não Encontrada
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-md text-foreground mt-4 mb-6 px-4">
              O conteúdo para a atividade com ID "{id}" não foi encontrado ou ainda não está disponível.
            </p>
            <Button asChild>
              <Link href="/">Voltar para a Página Inicial</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-full pt-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-1">
            <FileText size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-3xl font-headline">
              {activityTitle}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h2 className="text-center text-xl font-headline font-bold text-primary mt-2 mb-8">
            {activitySubheadline}
          </h2>
          <p className="text-md text-foreground mb-6 px-4">
            {activityDescription}
          </p>

          {pdfUrl !== "#" ? (
            <Button asChild className="mb-6">
              <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download size={20} className="mr-2" />
                VISUALIZAR ATIVIDADES
              </Link>
            </Button>
          ) : (
            <Button disabled className="mb-6">
              <Download size={20} className="mr-2" />
              PDF Indisponível
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
