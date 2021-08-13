import { EmpleadosService } from './../../services/empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.scss']
})
export class ListarEmpleadosComponent implements OnInit {

  constructor(
    private empleados: EmpleadosService
  ) { }
  
  public countries  = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }
  ];
  public listaEmpleados:any = [];
  public showTable = false;

  ngOnInit(): void {
    
    this.empleados.consultarEmpleados()
      .subscribe( (response:any) =>{
        console.log(response.data)
        this.listaEmpleados = response.data;
        this.showTable = true;
      })
  }

}
