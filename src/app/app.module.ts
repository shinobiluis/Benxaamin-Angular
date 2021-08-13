import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsertarEmpleadoComponent } from './pages/insertar-empleado/insertar-empleado.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarEmpleadoComponent,
    NavbarComponent,
    ListarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
