import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-publico-meta',
  templateUrl: './publico-meta.component.html',
  styleUrls: ['./publico-meta.component.sass']
})
export class PublicoMetaComponent implements OnInit {

  publicoMetaModificar:boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.publicMetaModificarChanged.subscribe(publicoMetaModificar => this.publicoMetaModificar = publicoMetaModificar);
  }

  setPublicoMetaModificar():void{
    this.dataService.setFalsePublicoMetaModificar();
  }

}
