import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { NgForm } from '@angular/forms';
import {Provincia} from '../Models/Provincia';
import { Canton } from '../Models/Canton';
import {Distrito} from '../Models/Distrito';


@Component({
  selector: 'app-form-compradores',
  templateUrl: './form-compradores.component.html',
  styleUrls: ['./form-compradores.component.sass']
})
export class FormCompradoresComponent implements OnInit {

  provinciasList: Array<string> = [];
  cantonesList: Array<string> = [];
  distritosList: Array<string> = [];
  provinciaSelect: string;

  constructor(private dataService:DataService) { 
    this.dataService.getDataProvincia().subscribe(data => {
      this.provinciasList = data.Provincias;
    });
  }

  ngOnInit() {
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

  onSubmit(compradorForm:NgForm):void{
    //Hacer el post de compradores
  }

}
