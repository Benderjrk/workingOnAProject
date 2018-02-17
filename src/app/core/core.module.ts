import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    NavbarComponent

  ]
})

export class CoreModule {}
