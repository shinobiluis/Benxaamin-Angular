import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsertarEmpleadoComponent } from './pages/insertar-empleado/insertar-empleado.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';

//manejo de formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Modulos para servicio http
import { HttpClientModule } from '@angular/common/http';
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
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
