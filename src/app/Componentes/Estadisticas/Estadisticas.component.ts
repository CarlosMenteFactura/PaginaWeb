import { Component, OnInit } from '@angular/core';
import { Lista } from '../../Datos';
import { Listado } from './Listado';

@Component({
  selector: 'app-Estadisticas',
  templateUrl: './Estadisticas.component.html',
  styleUrls: ['./Estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  Lista:Lista[]=[]
  constructor() { }
  ngOnInit() {
  }

}
