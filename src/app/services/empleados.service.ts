import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient
  ) { }

  insertarEmpleado( body:any ){
    // return this.http.post('http://benxaamin-api.kame.house/api/insert/employee', body ).pipe(catchError(this.handleError));
    return this.http.post('http://benxaamin-api.kame.house/api/insert/employee', body );
  }

  consultarEmpleados(){
    return this.http.get('http://benxaamin-api.kame.house/api/consult/employees' );
  }
}
