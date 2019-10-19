import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {TipoAnuncio} from '../Models/TipoAnuncio';

@Component({
  selector: 'app-form-anuncios',
  templateUrl: './form-anuncios.component.html',
  styleUrls: ['./form-anuncios.component.sass']
})
export class FormAnunciosComponent implements OnInit {

  anunciosModificar:boolean;
  tipoAnuncioList: Array<TipoAnuncio> = [];
  

  constructor(private dataService: DataService) {
    this.dataService.getDataTipoAnuncio().subscribe(data => {
      this.tipoAnuncioList = data;
    });
   }

  ngOnInit() {
    this.dataService.anunciosModificarChanged.subscribe(anunciosModificar => this.anunciosModificar = anunciosModificar);
  }

  refreshPage(){
    window.location.reload();
  }

  setAnunciosModificar():void{
    this.dataService.setFalseAnunciosModificar();
  }

  setPublicoMetaModificar():void{
    this.dataService.setTruePublicoMetaModificar();
  }

}
