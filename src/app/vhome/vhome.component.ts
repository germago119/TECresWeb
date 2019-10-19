import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vhome',
  templateUrl: './vhome.component.html',
  styleUrls: ['./vhome.component.css']
})
export class VHomeComponent implements OnInit {

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

  onSubmit(busquedaForm:NgForm):void{
 
    console.log(busquedaForm.value);
    window.location.href = 'listPropiedades'
  }

}
