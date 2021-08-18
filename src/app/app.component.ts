import { Component, OnInit} from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG,AppConfig } from './app-config.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Paystrax-POC';
  IfLogin: boolean = false;

  constructor(@Inject(APP_CONFIG) private config: AppConfig){

  }
  ngOnInit(){
    this.IfLogin = false;
    var token = localStorage.getItem("userBearer")?.toString();
    this.IfLogin = Number(token?.length) > 0 ? true : false;
  }
  logout(){
    localStorage.removeItem("userBearer");
    (<HTMLAnchorElement>document.getElementById("dashboard")).style.display = "none";
    (<HTMLAnchorElement>document.getElementById("createpayment")).style.display = "none";
    (<HTMLAnchorElement>document.getElementById("logout")).style.display = "none";
  }
}
