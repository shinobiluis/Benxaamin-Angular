import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';
import { InsertarEmpleadoComponent } from './pages/insertar-empleado/insertar-empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: InsertarEmpleadoComponent },
  { path: 'listar', component: ListarEmpleadosComponent },
  { path: '**',  pathMatch: 'full',  redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
