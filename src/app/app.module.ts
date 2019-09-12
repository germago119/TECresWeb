import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {AlertModule, BsDatepickerModule, ButtonsModule, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { VHomeComponent } from './app-routing/vhome/vhome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VAdminComponent } from './vadmin/vadmin.component';
import {ResponsiveModule} from 'ngx-responsive';

@NgModule({
  declarations: [
    AppComponent,
    VHomeComponent,
    PagenotfoundComponent,
    VAdminComponent
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
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
