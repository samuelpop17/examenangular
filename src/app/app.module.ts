import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { routing, appRoutingProviders } from './app.routing';
import { ServiceCubos } from './services/service.cubos';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarcascubosComponent } from './components/marcascubos/marcascubos.component';
import { DetallescubosComponent } from './components/detallescubos/detallescubos.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VercomprasComponent } from './components/vercompras/vercompras.component';
import { RealizarcompraComponent } from './components/realizarcompra/realizarcompra.component';
import { RegistroComponent } from './components/registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarcascubosComponent,
    DetallescubosComponent,
    SeguridadComponent,
    PerfilComponent,
    VercomprasComponent,
    RealizarcompraComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
