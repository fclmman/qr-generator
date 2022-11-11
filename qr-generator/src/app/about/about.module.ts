import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutPageComponent} from './about-page/about-page.component';
import {AboutRoutingModule} from "./about-routing.module";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatListModule
  ]
})
export class AboutModule {
}
