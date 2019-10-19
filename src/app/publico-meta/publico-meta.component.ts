import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-publico-meta',
  templateUrl: './publico-meta.component.html',
  styleUrls: ['./publico-meta.component.sass']
})
export class PublicoMetaComponent implements OnInit {

  publicoMetaModificar:boolean;
  provinciasList: Array<string> = [];
  cantonesList: Array<string> = [];
  distritosList: Array<string> = [];
  provinciaSelect: string;

  constructor(private dataService: DataService) {
    this.dataService.getDataProvincia().subscribe(data => {
      this.provinciasList = data.Provincias; 
      
    });
   }

  ngOnInit() {
    this.dataService.publicMetaModificarChanged.subscribe(publicoMetaModificar => this.publicoMetaModificar = publicoMetaModificar);
  }

  setPublicoMetaModificar():void{
    this.dataService.setFalsePublicoMetaModificar();
  }

  provinciaSeleccionada(provincia:string){
    this.provinciaSelect = provincia;
    this.dataService.getDataCanton(provincia).subscribe(data => {
      this.cantonesList = data.CantonesProvincia;
    });
  }

  cantonSeleccionado(canton:string):void{
    this.dataService.getDataDistrito(this.provinciaSelect,canton).subscribe(data=>{
      this.distritosList = data.DistritosCanton;
    });
  }

}
