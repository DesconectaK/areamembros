
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, LogOut, UserCircle, ShieldCheck, Bell, Moon, Globe, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const FIXED_USERNAME = "metododesconecta"; // Usuário fixo de login

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.002-6.554 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.554-5.338 11.891-11.893 11.891-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.296.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.206 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);


export default function SettingsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    const cookieOptions = [
      "path=/",
      "expires=Thu, 01 Jan 1970 00:00:00 GMT", 
      "SameSite=Lax",
    ];
    if (process.env.NODE_ENV === 'production') {
      cookieOptions.push("Secure");
    }
    document.cookie = `auth_token=; ${cookieOptions.join('; ')}`;
    
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
            <CardTitle className="text-center text-xl sm:text-2xl font-headline">Ajustes da Conta</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-primary mt-2 mb-4">
              Suas Informações de Acesso e Suporte
            </h2>
          </div>

          <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
            <div className="flex items-center">
              <UserCircle size={20} className="text-primary mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Usuário de Acesso:</p>
                <p className="text-sm text-muted-foreground">{FIXED_USERNAME}</p>
              </div>
            </div>
            <div className="flex items-start">
              <ShieldCheck size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Suas credenciais (usuário e senha) são geradas automaticamente e vinculadas à sua compra para garantir segurança e exclusividade. Por isso, não é possível alterá-las.
              </p>
            </div>
             <div className="flex items-center pt-2">
              <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Suporte e Dúvidas:</p>
                <p className="text-sm text-muted-foreground">suportdesconectakids@gmail.com</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="text-center">
             <h2 className="text-lg sm:text-xl font-headline font-bold text-primary mt-2 mb-6">
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

      <Link 
        href="https://wa.link/mx0fmj" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-20 right-4 md:right-6 z-50"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <Button
          variant="default"
          className="rounded-full h-14 w-14 p-0 flex items-center justify-center shadow-lg hover:bg-primary/90"
        >
          <WhatsAppIcon />
        </Button>
      </Link>
    </div>
  );
}
