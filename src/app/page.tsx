import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Package, Cog, Mail, User } from "lucide-react";
import { Logo } from "@/components/logo";
import AIContentSuggester from "@/components/ai-content-suggester";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <h1 className="text-lg font-semibold text-sidebar-foreground">
              T & E Empaques
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Inicio" isActive>
                <Home />
                Inicio
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Productos">
                <Package />
                Productos
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Servicios">
                <Cog />
                Servicios
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Contacto">
                <Mail />
                Contacto
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3 p-2">
            <Avatar className="size-9">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Usuario" data-ai-hint="profile picture" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-sidebar-foreground">Usuario</span>
              <span className="text-sidebar-foreground/70">usuario@email.com</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex h-full min-h-svh flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-xl font-semibold">Generador de Contenido IA</h1>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <AIContentSuggester />
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </>
  );
}
