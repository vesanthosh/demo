import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  @ViewChild('firstName', { static: true, read: ElementRef }) fName: ElementRef;
  @ViewChild('lastName', { static: true, read: ElementRef }) lName: ElementRef;
  @ViewChild('favNumber', { static: true, read: ElementRef }) favNo: ElementRef;

  constructor(private router: Router) { }

  dataOnSubmit() {
    console.log("First Name : " + this.fName.nativeElement.value);
    console.log("Last Name : " + this.lName.nativeElement.value);
    console.log("Fav. Number : " + this.favNo.nativeElement.value);

    const userData = {
      firstName: this.fName.nativeElement.value,
      lastName: this.lName.nativeElement.value,
      favNumber: this.favNo.nativeElement.value
    };

    this.router.navigateByUrl('/user-data', { state: userData })
  }

  clearData() {
    this.fName.nativeElement.value = "";
    this.lName.nativeElement.value = "";
    this.favNo.nativeElement.value = "";
  }

}
