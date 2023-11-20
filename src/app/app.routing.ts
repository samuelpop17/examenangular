import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { MarcascubosComponent } from "./components/marcascubos/marcascubos.component";
import { DetallescubosComponent } from "./components/detallescubos/detallescubos.component";
import { SeguridadComponent } from "./components/seguridad/seguridad.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { VercomprasComponent } from "./components/vercompras/vercompras.component";
import { RealizarcompraComponent } from "./components/realizarcompra/realizarcompra.component";
import { RegistroComponent } from "./components/registro/registro.component";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "marcascubos/:marca", component: MarcascubosComponent },
  { path: "detallescubos/:id", component: DetallescubosComponent },
  { path: "seguridad", component: SeguridadComponent },
  { path: "verperfil", component: PerfilComponent },
  { path: "vercompras", component: VercomprasComponent },
  { path: "realizarcompras", component: RealizarcompraComponent },
  { path: "registro", component: RegistroComponent },

  

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);