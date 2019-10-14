import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

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

  constructor() { }

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
