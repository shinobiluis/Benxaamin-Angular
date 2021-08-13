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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEmpleados = this.formBuilder.group({
      nombre: [ '', [Validators.required]],
      email: [ '', [Validators.required]],
      puesto: [ '', [Validators.required]],
      fecha_nacimiento: [ '', [Validators.required]],
      domicilio: [ '', [Validators.required]],
      skill: [ '', []],
      skills: [ [], [Validators.required]]
    })
  }

  send(): any{
    console.log( this.formEmpleados.value );
  }

  addSkill(): any{
    console.log('agregar')
    const skill = this.formEmpleados.value.skill;
    this.formEmpleados.value.skills.push( skill );
    this.formEmpleados.value.skill = "";
  }

}
