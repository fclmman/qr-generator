import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {distinctUntilChanged, map, Observable, tap} from "rxjs";
import {QrService} from "../service/qr.service";
import {QRCodeComponent} from "angularx-qrcode";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrPageComponent implements OnInit {
  input: Observable<string>;
  size: Observable<number>;

  private _sizeMap = new Map<string, number>()
    .set(Breakpoints.XSmall, 200)
    .set(Breakpoints.Small, 300)
    .set(Breakpoints.Medium, 350)
    .set(Breakpoints.Large, 400)
    .set(Breakpoints.XLarge, 500);

  constructor(private _qrService: QrService,
              private _breakpointObserver: BreakpointObserver) {
    this.input = this._qrService.input;
    this.size = this._breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge])
      .pipe(
        map((state) => {
          const defaultSize = 128;
          if (state.breakpoints[Breakpoints.XSmall]) {
            console.log('Matches XSmall viewport');
            return this._sizeMap.get(Breakpoints.XSmall) ?? defaultSize;
          }
          if (state.breakpoints[Breakpoints.Small]) {
            console.log('Matches Small viewport');
            return this._sizeMap.get(Breakpoints.Small) ?? defaultSize;
          }
          if (state.breakpoints[Breakpoints.Medium]) {
            console.log('Matches Medium  viewport');
            return this._sizeMap.get(Breakpoints.Medium) ?? defaultSize;
          }
          if (state.breakpoints[Breakpoints.Large]) {
            console.log('Matches Large viewport');
            return this._sizeMap.get(Breakpoints.Large) ?? defaultSize;
          }
          if (state.breakpoints[Breakpoints.XLarge]) {
            console.log('Matches XLarge viewport');
            return this._sizeMap.get(Breakpoints.XLarge) ?? defaultSize;
          }
          return defaultSize;
        }),
        distinctUntilChanged()
      );
  }

  setInput(value: string) {
    this._qrService.setInput(value);
  }

  download(qrContainer: QRCodeComponent) {
    const canvas = qrContainer.qrcElement.nativeElement.querySelector('canvas');
    const image = canvas?.toDataURL("image/png"); //.replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    if (image) {
      this.downloadImage(image, 'qrCode.png')
    }
  }

  private downloadImage(data: any, filename = 'qrCode.png') {
    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnInit(): void {
  }
}
