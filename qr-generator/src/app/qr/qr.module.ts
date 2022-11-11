import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrPageComponent} from './qr-page/qr-page.component';
import {QrRoutingModule} from "./qr-routing.module";
import {QRCodeModule} from "angularx-qrcode";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    QrPageComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    QrRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class QrModule {
}
