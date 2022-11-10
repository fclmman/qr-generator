import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrPageComponent} from './qr-page/qr-page.component';
import {QrRoutingModule} from "./qr-routing.module";

@NgModule({
  declarations: [
    QrPageComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule
  ]
})
export class QrModule {
}
