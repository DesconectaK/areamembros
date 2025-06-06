import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-full">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <SettingsIcon size={48} className="text-primary" />
          </div>
          <CardTitle className="text-center text-2xl font-headline">Ajustes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Configure as preferências da sua aplicação.
          </p>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications-switch" className="text-base">Notificações Push</Label>
            <Switch id="notifications-switch" aria-label="Toggle push notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode-switch" className="text-base">Modo Escuro</Label>
            <Switch id="dark-mode-switch" disabled aria-label="Toggle dark mode (disabled)" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="language-select" className="text-base">Idioma</Label>
            <span className="text-muted-foreground">Português (Brasil)</span>
          </div>
          <Button className="w-full" variant="outline">Salvar Preferências</Button>
        </CardContent>
      </Card>
    </div>
  );
}
