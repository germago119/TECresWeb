import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {VHomeComponent} from './vhome/vhome.component';
import {VAdminComponent} from '../vadmin/vadmin.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: VHomeComponent},
  {path: 'admin', component: VAdminComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
