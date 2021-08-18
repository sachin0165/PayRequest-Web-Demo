import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginRequest } from '../../model/loginrequest';
import { PaystraxServiceService } from 'src/app/services/paystrax-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.css']
})
export class LoginpopupComponent implements OnInit {

  constructor(private paystraxServiceService : PaystraxServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(f: NgForm) {
    if(f.valid){
      this.paystraxServiceService.login(f.value["walletname"], f.value["password"]).subscribe(r =>{
           localStorage.setItem('userBearer',r.data.accessToken);
           localStorage.setItem('userWalletAddress',r.data.walletAddress);
           console.log(r.data.accessToken);
           document.getElementById('login-pop-close')?.click();
           this.router.navigate(['/dashboard']);
      },
      (error:HttpErrorResponse) => {
        alert('Invalid email or password');
    });
    } 
  }
}
