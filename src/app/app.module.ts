import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadisticasComponent } from './Componentes/Estadisticas/Estadisticas.component';
import { BannerComponent } from './Componentes/Banner/Banner.component';
import { PiePaginaComponent } from './Componentes/piePagina/piePagina.component';

@NgModule({
  declarations: [		
    AppComponent,
      EstadisticasComponent,
      BannerComponent,
      PiePaginaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
