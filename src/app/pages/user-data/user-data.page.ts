import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {

  userData: any;

  constructor(private route: Router) {
    this.userData = this.route.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    // console.log(history.state)
    console.log(this.userData);
    console.log(this.route.getCurrentNavigation().extras.state)
  }

}
