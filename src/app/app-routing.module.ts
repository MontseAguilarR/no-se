import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { ListarCancionesComponent } from './Components/listar-canciones/listar-canciones.component';
import { CrearCancionComponent } from './Components/crear-cancion/crear-cancion.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';

const routes: Routes = [
  {path:'presentacion', component: PresentacionComponent},
  { path:'', component: ListarCancionesComponent},
  {path:'crear-cancion', component: CrearCancionComponent},
  {path:'editar-cancion/:id', component: CrearCancionComponent}, 
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
