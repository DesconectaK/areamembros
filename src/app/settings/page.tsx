
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, LogOut } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    document.cookie = "auth_token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full pt-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-1">
            <SettingsIcon size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-2xl font-headline">Ajustes</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6"> {/* text-center removed from here to not affect form items alignment */}
          <div className="text-center"> {/* Added a wrapper for text-center on subtitle and description */}
            <h2 className="text-center text-xl font-headline font-bold text-primary mt-2 mb-8">
              Personalize suas preferências
            </h2>
            <p className="text-md text-foreground mb-6 px-4">
              Configure as preferências da sua aplicação.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications-switch" className="text-base">Notificações Push</Label>
            <Switch id="notifications-switch" aria-label="Toggle push notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode-switch" className="text-base">Modo Escuro</Label>
            <Switch id="dark-mode-switch" defaultChecked disabled aria-label="Toggle dark mode (disabled)" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="language-select" className="text-base">Idioma</Label>
            <span className="text-muted-foreground">Português (Brasil)</span>
          </div>
          <Button className="w-full" variant="outline">Salvar Preferências</Button>
          <Button className="w-full" variant="destructive" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
