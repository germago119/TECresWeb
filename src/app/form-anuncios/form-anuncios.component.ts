import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-anuncios',
  templateUrl: './form-anuncios.component.html',
  styleUrls: ['./form-anuncios.component.sass']
})
export class FormAnunciosComponent implements OnInit {

  anunciosModificar:boolean;
  

  constructor(private dataService: DataService) { }

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
