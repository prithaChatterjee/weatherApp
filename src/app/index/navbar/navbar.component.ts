import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isChecked = false;
  @Output() drawer = new EventEmitter();

  darkMode(modeCheck){
    modeCheck.checked ? this.isChecked = true : this.isChecked = false;
    this._darkModeService.isDarkMode(this.isChecked);
  }

  toggle(){
    this.drawer.emit();
  }

  val(val1){
    console.log(val1);
  }

  constructor( private _darkModeService : DarkModeService) { }

  ngOnInit(): void {
  }

}
