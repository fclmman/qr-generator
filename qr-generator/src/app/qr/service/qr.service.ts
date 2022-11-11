import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QrService {
  input: Observable<string>;

  private _input = new BehaviorSubject<string>('');

  constructor() {
    this.input = this._input.asObservable();
  }

  setInput(value: string) {
    this._input.next(value);
  }
}
