import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { MinhasHabilidadesComponent } from './minhas-habilidades/minhas-habilidades.component';
import { MinhasExperienciasComponent } from './minhas-experiencias/minhas-experiencias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SobreMimComponent,
    MinhasHabilidadesComponent,
    MinhasExperienciasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
