
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, LogOut, UserCircle, ShieldCheck, Bell, Moon, Globe } from "lucide-react";
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

          <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
            <div className="flex items-center">
              <UserCircle size={20} className="text-primary mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Email de Acesso:</p>
                <p className="text-sm text-muted-foreground">{USER_EMAIL}</p>
              </div>
            </div>
            <div className="flex items-start">
              <ShieldCheck size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Suas credenciais (email e senha) são geradas automaticamente e vinculadas à sua compra para garantir segurança e exclusividade. Por isso, não é possível alterá-las.
              </p>
            </div>
          </div>

          <Separator />

          <div className="text-center">
             <h2 className="text-xl font-headline font-bold text-primary mt-2 mb-6">
              Preferências do Aplicativo
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell size={20} className="text-primary mr-3" />
                <Label htmlFor="notifications-switch" className="text-base">Notificações Push</Label>
              </div>
              <Switch id="notifications-switch" aria-label="Toggle push notifications" />
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon size={20} className="text-primary mr-3" />
                  <Label htmlFor="dark-mode-switch" className="text-base">Modo Escuro</Label>
                </div>
                <Switch id="dark-mode-switch" defaultChecked disabled aria-label="Toggle dark mode (disabled)" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-left ml-8">
                Fixo para otimizar sua experiência visual no app.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe size={20} className="text-primary mr-3" />
                <Label htmlFor="language-select" className="text-base">Idioma</Label>
              </div>
              <span className="text-sm text-muted-foreground">Português (Brasil)</span>
            </div>
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

    