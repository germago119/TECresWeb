import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-anuncios-cliente',
  templateUrl: './list-anuncios-cliente.component.html',
  styleUrls: ['./list-anuncios-cliente.component.sass']
})
export class ListAnunciosClienteComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  refreshPage(){
    window.location.reload();
  }

  setAnunciosModificar():void{
    this.dataService.setTrueAnunciosModificar();
  }
}
