import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { StoreListComponent } from './store-list/store-list.component';

const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreListComponent },
    { path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModule {
}
