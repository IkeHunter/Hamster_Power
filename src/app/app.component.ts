import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') converter: NgForm;

  number = 0;
  horse = 0;
  car = 0;
  house = 0;
  cas = 0;
  hamPwd = 0.000012981;
  hamJoule = 0.00968;
  hrPwd = 0;
  houseWatt = 0.3472;
  casWatt = 12.695;
  hamWatt = 0;


  onConvert() {
    this.number = this.converter.value.num;

    this.hamWatt = this.number * this.hamJoule;
    this.hamWatt = this.sci(this.hamWatt);

    this.horse = this.number * this.hamPwd;
    this.horse = this.sci(this.horse);

    this.car = this.horse / 180;
    this.car = this.sci(this.car);

    this.house = this.number * (1 / (this.houseWatt / this.hamJoule));
    this.house = this.sci(this.house);

    this.cas = this.number * (1 / (this.casWatt / this.hamJoule));
    this.cas = this.sci(this.cas);

    this.number = this.sci(this.number);
  }

  sci(x) {
    x = +x.toPrecision(4);
    if (x.toString().length >= 7) {
      x = +x;
      return x.toExponential(3);
    }
    return x;
  }

}
