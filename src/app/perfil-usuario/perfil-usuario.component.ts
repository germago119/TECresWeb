import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Cliente} from '../Models/Cliente';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.sass']
})
export class PerfilUsuarioComponent implements OnInit {

  cedulaCliente:number;
  cliente:Cliente = new Cliente(null,null,'','','','','','','','');

  constructor(private dataService:DataService) { 
    this.cedulaCliente = this.dataService.getCedulaCliente();
    this.dataService.getDataCliente(this.cedulaCliente).subscribe(data => {
      this.cliente = data; 
      
    });
  }

  ngOnInit() {
  }

  eliminarCliente():void{
    this.dataService.deleteDataCliente(this.dataService.getCedulaCliente());
  }

}
