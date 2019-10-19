import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {TipoInmueble} from '../Models/TipoInmueble';
import {TipoPiso} from '../Models/TipoPiso';

@Component({
  selector: 'app-form-propiedades',
  templateUrl: './form-propiedades.component.html',
  styleUrls: ['./form-propiedades.component.css']
})
export class FormPropiedadesComponent implements OnInit {

  propiedadesModificar:boolean;
  tipoInmuebleList: Array<TipoInmueble> = [];
  tipoPisoList: Array<TipoPiso> = [];
  provinciasList: Array<string> = [];
  cantonesList: Array<string> = [];
  distritosList: Array<string> = [];
  provinciaSelect: string;

  constructor(private dataService:DataService) {
    this.dataService.getDataTipoInmueble().subscribe(data => {
      this.tipoInmuebleList = data;
    });

    this.dataService.getDataTipoPiso().subscribe(data => {
      this.tipoPisoList = data;
    });

    this.dataService.getDataProvincia().subscribe(data => {
      this.provinciasList = data.Provincias; 
      
    });
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

  ngOnInit() {
    this.dataService.propiedadesModificarChanged.subscribe(propiedadesModificar => this.propiedadesModificar = propiedadesModificar);
  }

  setPropiedadesModificar():void{
    this.dataService.setFalsePropiedadesModificar();
  }

}
