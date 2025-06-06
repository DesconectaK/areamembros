
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, LogOut, UserCircle, ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const USER_EMAIL = "desconectakids@gmail.com"; // Email fixo de login

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
    <div className="container mx-auto p-4 flex flex-col items-center min-h-full pt-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-1">
            <SettingsIcon size={48} className="text-primary mr-3" />
            <CardTitle className="text-center text-2xl font-headline">Ajustes da Conta</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-headline font-bold text-primary mt-2 mb-4">
              Suas Informações de Acesso
            </h2>
          </div>

          <div className="p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center mb-3">
              <UserCircle size={20} className="text-primary mr-2" />
              <p className="text-sm font-medium text-foreground">
                Email de Acesso: <span className="font-normal text-muted-foreground">{USER_EMAIL}</span>
              </p>
            </div>
            <div className="flex items-start">
              <ShieldCheck size={32} className="text-primary mr-3 mt-1 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Suas credenciais de acesso (email e senha) são geradas automaticamente e vinculadas à sua compra para garantir sua segurança e exclusividade. Por isso, não é possível alterá-las por aqui. Fique tranquila(o), seu acesso está protegido!
              </p>
            </div>
          </div>

          <Separator />

          <div className="text-center">
             <h2 className="text-xl font-headline font-bold text-primary mt-2 mb-6">
              Preferências do Aplicativo
            </h2>
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
          
          <Separator />

          <Button className="w-full mt-4" variant="destructive" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair da Conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
