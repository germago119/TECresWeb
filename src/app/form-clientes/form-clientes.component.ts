import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../data.service';
import {PerfilCliente} from '../Models/PerfilCliente';


@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.sass']
})
export class FormClientesComponent implements OnInit {

  perfilClienteList: Array<PerfilCliente> = [];

  constructor(private dataService:DataService) {

    this.dataService.getDataPerfilCliente().subscribe(perfilCliente => {
      this.perfilClienteList = perfilCliente;
    });

   }

  ngOnInit() {
  }

  onSubmit(clienteForm:NgForm):void{
 
    this.dataService.postCliente(clienteForm.value.nombre,
      clienteForm.value.primerApellido,clienteForm.value.segundoApellido,clienteForm.value.nacionalidad,
      clienteForm.value.cedula,clienteForm.value.perfilCliente,clienteForm.value.correo,
      clienteForm.value.usuario,clienteForm.value.contrasena);

  }
  
  


}
