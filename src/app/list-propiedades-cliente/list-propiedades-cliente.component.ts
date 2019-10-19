import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {PropiedadesCliente} from '../Models/PropiedadesCliente';

@Component({
  selector: 'app-list-propiedades-cliente',
  templateUrl: './list-propiedades-cliente.component.html',
  styleUrls: ['./list-propiedades-cliente.component.sass']
})
export class ListPropiedadesClienteComponent implements OnInit {

  propiedadesClienteList: Array<PropiedadesCliente> = [];

  constructor(private dataService:DataService) {
    this.dataService.getDataPropiedadesCliente(this.dataService.getCedulaCliente()).subscribe(data => {
       this.propiedadesClienteList= data.Propiedades_Cliente;
    });

   }

  ngOnInit() {
  }

  refreshPage(){
    window.location.reload();
  }

  setPropiedadesModificar():void{
    this.dataService.setTruePropiedadesModificar();
  }

}
