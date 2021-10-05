import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Servicio/listar/listar.component';
import { NuevoComponent } from './Servicio/nuevo/nuevo.component';
import { EditarComponent } from './Servicio/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './Servicio/info/info.component';
import { BuscarComponent } from './Servicio/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NuevoComponent,
    EditarComponent,
    InfoComponent,
    BuscarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
