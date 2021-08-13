import { EmpleadosService } from './../../services/empleados.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.scss']
})
export class InsertarEmpleadoComponent implements OnInit {

  public formEmpleados!: FormGroup;
  public staticAlertClosed = true;
  public errors:any = '';
  public success = false;

  constructor(
    private formBuilder: FormBuilder,
    private empleados: EmpleadosService
  ) { }

  ngOnInit(): void {
    this.formEmpleados = this.formBuilder.group({
      nombre: [ '', [Validators.required]],
      email: [ '', [Validators.required]],
      puesto: [ '', [Validators.required]],
      fecha_nacimiento1: [ '', [Validators.required]],
      fecha_nacimiento: [ '', [Validators.required]],
      domicilio: [ '', [Validators.required]],
      skills: [ '', []],
      skill: [ [], [Validators.required]]
    })
  }

  send(): any{
    this.staticAlertClosed = true;
    this.success = false;
    const year = this.formEmpleados.value.fecha_nacimiento1.year;
    const month = this.formEmpleados.value.fecha_nacimiento1.month;
    const day = this.formEmpleados.value.fecha_nacimiento1.day;

    this.formEmpleados.value.fecha_nacimiento = `${year}-${month}-${day}`
    
    // console.log( this.formEmpleados.value );
    this.empleados.insertarEmpleado( this.formEmpleados.value )
      .subscribe( (response: any) =>{
        console.log( response.data )
        this.success = true;
      }, err => {
        this.errors = err.error.errors;
        this.staticAlertClosed = false;
      }, () => {
        console.log('completed');
        
      })
      
  }

  addSkill(): any{
    console.log('agregar')
    const skill = this.formEmpleados.value.skills;
    this.formEmpleados.value.skill.push( skill );
    this.formEmpleados.value.skills = "";
  }

}
