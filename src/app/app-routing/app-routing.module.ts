import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {VHomeComponent} from '../vhome/vhome.component';
import {VAdminComponent} from '../vadmin/vadmin.component';
import {VclienteComponent} from '../vcliente/vcliente.component';
import {FormPropiedadesComponent} from '../form-propiedades/form-propiedades.component';
import {PerfilUsuarioComponent} from '../perfil-usuario/perfil-usuario.component';
import {PublicoMetaComponent} from '../publico-meta/publico-meta.component';
import {FormAnunciosComponent} from '../form-anuncios/form-anuncios.component';
import {ListPropiedadesClienteComponent} from '../list-propiedades-cliente/list-propiedades-cliente.component';
import {ListAnunciosClienteComponent} from '../list-anuncios-cliente/list-anuncios-cliente.component';
import {FormClientesComponent} from '../form-clientes/form-clientes.component';
import {FormCompradoresComponent} from '../form-compradores/form-compradores.component';
import {ListPropiedadesGeneralComponent} from '../list-propiedades-general/list-propiedades-general.component';
import {DetallesPropiedadComponent} from '../detalles-propiedad/detalles-propiedad.component';
import {MensajesClienteComponent} from '../mensajes-cliente/mensajes-cliente.component';
import {DetalleMensajeComponent} from '../detalle-mensaje/detalle-mensaje.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'admin', component: VAdminComponent},
  {path: 'cliente',component:VclienteComponent},
  {path: 'cliente/formPropiedades',component:FormPropiedadesComponent},
  {path: 'cliente/perfilUsuario',component:PerfilUsuarioComponent},
  {path: 'cliente/publicoMeta',component:PublicoMetaComponent},
  {path: 'cliente/formAnuncios',component:FormAnunciosComponent},
  {path: 'cliente/listPropiedades',component:ListPropiedadesClienteComponent},
  {path: 'cliente/listAnuncios',component:ListAnunciosClienteComponent},
  {path: 'cliente/mensajes',component:MensajesClienteComponent},
  {path: 'cliente/mensajes/detalle',component: DetalleMensajeComponent},
  {path: '',component:VHomeComponent},
  {path: 'formClientes',component: FormClientesComponent},
  {path: 'formCompradores', component: FormCompradoresComponent},
  {path: 'listPropiedades',component: ListPropiedadesGeneralComponent},
  {path: 'detallesPropiedad',component: DetallesPropiedadComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
