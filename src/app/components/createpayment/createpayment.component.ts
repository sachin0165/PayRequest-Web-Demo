import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaystraxServiceService } from 'src/app/services/paystrax-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit {

  userWallet: string;

  constructor(private paystraxServiceService : PaystraxServiceService,
    private router: Router) {
    this.userWallet = "";
   }

  ngOnInit(): void {
      this.userWallet = String(localStorage.getItem('userWalletAddress'));
  }

  onSubmit(f: NgForm){
    if(f.valid){
      var token = localStorage.getItem('userBearer')?.toString();
      this.paystraxServiceService.CreateRequest(token,f.value['Reason'],f.value['From'],f.value['To'],f.value['Amount'],f.value['Expiry']).subscribe(r =>{
        this.router.navigate(['/dashboard']);
      },
      (error:HttpErrorResponse) => {
        alert('Invalid email or password');
     
      });
    }
  }

}
