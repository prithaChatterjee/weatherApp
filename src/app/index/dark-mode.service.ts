import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private darkModeOnSource = new Subject<boolean>();

  darkModeOn$ = this.darkModeOnSource.asObservable();

  isDarkMode(res: boolean){
    this.darkModeOnSource.next(res);
  }

  constructor() { }
}
