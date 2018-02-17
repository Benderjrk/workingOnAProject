import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { CoreModule } from './core/core.module';
import { StoreListModule } from './store-list/store-list.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CoreModule,
    StoreListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
