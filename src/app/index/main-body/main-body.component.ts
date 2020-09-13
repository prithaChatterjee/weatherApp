import { DialogComponent } from './../dialog/dialog.component';
import { Body } from './../body';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { ApiCallingService } from '../api-calling.service';
import { MatDialog } from '@angular/material/dialog';
import { config } from 'rxjs';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  isDarkModeOn = false;

  screen = window.innerWidth;

  darkMode = {
    boxShadow: '5px 5px 15px #e2e2e2, -5px -5px 15px #e2e2e2;',
    backgroundImage: 'none',
    color: 'black'
  }

  tunisia = new Body('Tunisia', 20, 'cloudy');
  finland = new Body('Finland', -2, 'snowing');
  india = new Body('India', -2, 'sunny');
  thaiLand = new Body('thaiLand', -2, 'strom');
  uk = new Body('uk', -2, 'raining');
  usa = new Body('usa', -2, 'strom');
  newCity;
  newTem;
  newWeather;
  cities = [this.tunisia, this.finland, this.india, this.thaiLand, this.uk, this.usa];
  showCities = [];
  slideIndex = 0;
  backdisabled = true;
  nextdisabled = false;
  increTem(tem) {
    this.cities[tem].temparature++
  }

  decremntTem(tem) {
    this.cities[tem].temparature--
  }

  plusDivs() {
    this.backdisabled = false;
    if (this.slideIndex < 0) {
      this.slideIndex = 0;
    }
    this.slideIndex++;
    if (!this.nextdisabled) {
      let nextItem = this.cities.indexOf(this.showCities[this.showCities.length - 1])
      this.showCities.splice(0, 1);
      this.showCities.push(this.cities[nextItem + 1]);

    }
    if (this.slideIndex <= this.cities.length - 4) {
      this.nextdisabled = false;
    }
    else {
      this.nextdisabled = true;
    }
  }

  minusDivs() {
    this.nextdisabled = false;
    if (this.slideIndex > this.cities.length - 3) {
      this.slideIndex = this.cities.length - 3;
    }
    this.slideIndex--;
    if (!this.backdisabled) {
      let backItem = this.cities.indexOf(this.showCities[0]) - 1;
      this.showCities.pop();
      this.showCities.splice(0, 0, this.cities[backItem]);
    }
    if (this.slideIndex > 0) {
      this.backdisabled = false;
    } else {
      this.backdisabled = true
    }

  }


  showDiv() {
    if (this.slideIndex >= 0) {

      for (let index = this.slideIndex; index < (this.slideIndex + 3); index++) {
        this.showCities.push(this.cities[index]);

      }
    }
  }




  constructor(private _darkModeService: DarkModeService, private getApi: ApiCallingService, private dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.cities.push(result);
        this.nextdisabled = false;
      }
    })
  }
  ngOnInit(): void {
    if (this.screen >= 768) {
      this.showDiv();

    } else {
      this.showCities = this.cities;
    }
    this.getApi.gettemp();
    this._darkModeService.darkModeOn$.subscribe((result) => {
      this.isDarkModeOn = result;
      if (this.isDarkModeOn) {
        this.darkMode = {
          boxShadow: 'none',
          backgroundImage: 'linear-gradient(rgb(62, 3, 102), #d627d6)',
          color: 'white'
        };
      } else {
        this.darkMode = {
          boxShadow: '',
          backgroundImage: 'none',
          color: 'black'
        }
      }
    });
  }

}


