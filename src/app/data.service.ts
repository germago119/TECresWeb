import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Provincia} from './Models/Provincia';
import {Canton} from './Models/Canton';
import {PerfilCliente} from './Models/PerfilCliente';
import {Distrito} from './Models/Distrito';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Variables globales que se comparten entre componentes mediante un subject observable
  private propiedadesModificar:boolean = false;
  private anunciosModificar:boolean = false;
  private publicoMetaModifcar:boolean = false;
  public propiedadesModificarChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.propiedadesModificar);
  public anunciosModificarChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.anunciosModificar);
  public publicMetaModificarChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.publicoMetaModifcar);

  constructor(private hhtpClient:HttpClient) {
    console.log("Service is working!");
   }

   getDataProvincia(){
     return this.hhtpClient.get<Provincia>('/api/Provincias');
   }

   getDataCanton(provincia:string){
     return this.hhtpClient.get<Canton>('/api/CantonesProvincia/' + provincia.toString());
   }

   getDataDistrito(provincia:string ,canton:string){
     return this.hhtpClient.get<Distrito>('/api/DistritosCanton/' + provincia.toString() + '/' + canton.toString());
   }

   getDataPerfilCliente(){
     return this.hhtpClient.get<PerfilCliente[]>('/api/PERFIL_DE_CLIENTE');
   }

   postCliente(nombre:string, apellido1:string, apellido2:string, nacionalidad:string, cedula:number, perfilCliente:string, correo:string, usuario:string,contrasena:string){
      this.hhtpClient.post('/api/CLIENTE',{
        Nombre:nombre,
        Apellido1: apellido1,
        Apellido2: apellido2,
        Nacionalidad: nacionalidad,
        Cedula: cedula,
        Perfil_Cliente: perfilCliente,
        Correo: correo,
        Usuario: usuario,
        Contrasena: contrasena
      })
      .subscribe(
        data=>{
          console.log('POST request is succesful',data);
          alert("Se agregó con éxito el cliente");
        },
        error=>{
          console.log('Error',error);
          alert("Se tuvo un problema al agregar el cliente");
        });
   }



  //Métodos para compartir los datos del observable
  getPropiedadesModificar():boolean {
    return this.propiedadesModificar;
  }

  setTruePropiedadesModificar():void{
    this.propiedadesModificar = true;
    this.propiedadesModificarChanged.next(this.propiedadesModificar);
  }

  setFalsePropiedadesModificar():void{
    this.propiedadesModificar = false;
    this.propiedadesModificarChanged.next(this.propiedadesModificar);
  }

  getAnunciosModificar():boolean{
    return this.anunciosModificar;
  }

  setTrueAnunciosModificar():void{
    this.anunciosModificar = true;
    this.anunciosModificarChanged.next(this.anunciosModificar);
  }

  setFalseAnunciosModificar():void{
    this.anunciosModificar = false;
    this.anunciosModificarChanged.next(this.anunciosModificar);
  }

  getPublicoMetaModificar():boolean{
    return this.publicoMetaModifcar;
  }

  setTruePublicoMetaModificar():void{
    this.publicoMetaModifcar = true;
    this.publicMetaModificarChanged.next(this.publicoMetaModifcar);
  }

  setFalsePublicoMetaModificar():void{
    this.publicoMetaModifcar = false;
    this.publicMetaModificarChanged.next(this.publicoMetaModifcar);
  }
}
