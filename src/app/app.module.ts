import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AlertModule, BsDatepickerModule, ButtonsModule, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {VHomeComponent} from './vhome/vhome.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {VAdminComponent} from './vadmin/vadmin.component';
import {ResponsiveModule} from 'ngx-responsive';
import {RVentasComponent} from './rventas/rventas.component';
import {RAnunciosComponent} from './ranuncios/ranuncios.component';
import {GVendedoresComponent} from './gvendedores/gvendedores.component';
import {RComisionesComponent} from './rcomisiones/rcomisiones.component';
import {GEstadisticasComponent} from './gestadisticas/gestadisticas.component';
import {AVendedorComponent} from './avendedor/avendedor.component';
import {AAnunciosComponent} from './aanuncios/aanuncios.component';
import {GAdminComponent} from './gadmin/gadmin.component';
import {GOcupacionesComponent} from './gocupaciones/gocupaciones.component';
import {GPerfilClientesComponent} from './gperfil-clientes/gperfil-clientes.component';
import {GTiposAnuncioComponent} from './gtipos-anuncio/gtipos-anuncio.component';
import {GUbicacionesComponent} from './gubicaciones/gubicaciones.component';
import {GTiposInmuebleComponent} from './gtipos-inmueble/gtipos-inmueble.component';

@NgModule({
  declarations: [
    AppComponent,
    VHomeComponent,
    PagenotfoundComponent,
    VAdminComponent,
    RVentasComponent,
    RAnunciosComponent,
    GVendedoresComponent,
    RComisionesComponent,
    GEstadisticasComponent,
    AVendedorComponent,
    AAnunciosComponent,
    GAdminComponent,
    GOcupacionesComponent,
    GPerfilClientesComponent,
    GTiposAnuncioComponent,
    GUbicacionesComponent,
    GTiposInmuebleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ResponsiveModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
