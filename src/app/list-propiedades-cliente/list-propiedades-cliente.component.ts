import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-propiedades-cliente',
  templateUrl: './list-propiedades-cliente.component.html',
  styleUrls: ['./list-propiedades-cliente.component.sass']
})
export class ListPropiedadesClienteComponent implements OnInit {


  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  refreshPage(){
    window.location.reload();
  }

  setPropiedadesModificar():void{
    this.dataService.setTruePropiedadesModificar();
  }

}
