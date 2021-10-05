import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './Servicio/buscar/buscar.component';
import { EditarComponent } from './Servicio/editar/editar.component';
import { InfoComponent } from './Servicio/info/info.component';
import { ListarComponent } from './Servicio/listar/listar.component';
import { NuevoComponent } from './Servicio/nuevo/nuevo.component';
//import { EliminarComponent } from './Servicio/eliminar/eliminar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent},
  //{path:'eliminar', component:EliminarComponent},
  {path:'info', component:InfoComponent},
  {path:'buscar', component:BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
