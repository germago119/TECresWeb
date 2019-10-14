import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-propiedades',
  templateUrl: './form-propiedades.component.html',
  styleUrls: ['./form-propiedades.component.css']
})
export class FormPropiedadesComponent implements OnInit {

  propiedadesModificar:boolean;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.propiedadesModificarChanged.subscribe(propiedadesModificar => this.propiedadesModificar = propiedadesModificar);
  }

  setPropiedadesModificar():void{
    this.dataService.setFalsePropiedadesModificar();
  }

}
