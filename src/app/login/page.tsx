
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Lock, LogIn, Eye, EyeOff } from "lucide-react";

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Usuário é obrigatório." }),
  password: z.string().min(1, { message: "Senha é obrigatória." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const FIXED_USERNAME = "metododesconecta";
const FIXED_PASSWORD = "premium@";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(true); 

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: FIXED_USERNAME,
      password: FIXED_PASSWORD,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);

    if (data.username === FIXED_USERNAME && data.password === FIXED_PASSWORD) {
      toast({
        title: "Login bem-sucedido!",
        description: "Acessando a plataforma...",
      });

      const cookieOptions = [
        "path=/",
        `max-age=${60 * 60 * 24 * 7}`, // 7 dias
        "SameSite=Lax",
      ];
      // Adiciona Secure apenas em produção (HTTPS)
      if (process.env.NODE_ENV === 'production') {
        cookieOptions.push("Secure");
      }
      document.cookie = `auth_token=true; ${cookieOptions.join('; ')}`;
      
      router.push("/");
      router.refresh();

    } else {
      toast({
        variant: "destructive",
        title: "Erro no Login",
        description: "Usuário ou senha inválidos.",
      });
      form.setError("username", { type: "manual", message: " " });
      form.setError("password", { type: "manual", message: "Credenciais inválidas" });
      setIsLoading(false); 
    }
  }

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl bg-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <CardTitle className="text-3xl font-headline text-primary">Pagamento Aprovado!</CardTitle>
          <CardDescription className="text-muted-foreground pt-1">
            Agradecemos pela confiança! Seu acesso exclusivo do Método Desconecta foi gerado automaticamente.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-center text-muted-foreground mb-6 px-4">
            Utilize as credenciais abaixo, preparadas especialmente para você!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/90">Usuário de Acesso</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                          type="text"
                          placeholder="Seu usuário gerado" 
                          className="pl-10 rounded-lg" 
                          {...field} 
                          readOnly 
                          aria-label="Usuário"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/90">Senha de Acesso</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Sua senha gerada"
                          className="pl-10 pr-10 rounded-lg"
                          {...field} 
                          readOnly 
                          aria-label="Senha"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                          aria-label={isPasswordVisible ? "Esconder senha" : "Mostrar senha"}
                        >
                          {isPasswordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full rounded-lg text-lg py-6 bg-primary hover:bg-primary/90" 
                disabled={isLoading}
                aria-label="Entrar"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" /> Entrar
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
