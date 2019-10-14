import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-propiedad',
  templateUrl: './detalles-propiedad.component.html',
  styleUrls: ['./detalles-propiedad.component.sass']
})
export class DetallesPropiedadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refreshPage(){
    window.location.reload();
  }
}
