import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaystraxServiceService } from 'src/app/services/paystrax-service.service';
import { DatePipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {

  paymentguid:string;
  amount:string;
  createdate:string;
  cancellationdate:string;
  paymentstatus:number;
  requestGuid:string;
  tokenBearer:string;
  fromAddress: string;

  constructor(  private activatedRoute: ActivatedRoute,private paystraxServiceService : PaystraxServiceService,public datepipe: DatePipe,
    private router: Router) {
    this.paymentguid = "";
    this.amount = "";
    this.createdate = "";
    this.cancellationdate = "";
    this.requestGuid = "";
    this.paymentstatus = 0;
    this.tokenBearer = String(localStorage.getItem('userBearer'));
    this.fromAddress = "";
   }

  ngOnInit(): void {
    this.paymentguid = this.activatedRoute.snapshot.params.paymentguid;
    var token = localStorage.getItem('userBearer')?.toString();
    this.paystraxServiceService.GetPaymentRequest(token,this.paymentguid).subscribe(r=>{
      this.amount = r.data.amount;
      this.createdate = String(this.datepipe.transform(r.data.CreationTimeUtc, 'MMM dd,yyyy')); 
      this.cancellationdate = String(this.datepipe.transform(r.data.cancellationTimeUtc, 'MMM dd,yyyy')); 
      this.paymentstatus = r.data.paymentStatus;
      this.fromAddress = r.data.fromAddress;
      //console.log(this.paymentstatus);
      this.requestGuid = r.data.requestGuid;
    })

  }

  payNow(){    
    this.paystraxServiceService.PaynowRequest(this.tokenBearer,this.requestGuid).subscribe(result => {

      this.router.navigate(['/dashboard']);
    });
  }

  cancleRequestPayment(){    
    this.paystraxServiceService.CancelPaymentRequest(this.tokenBearer,this.requestGuid).subscribe(result => {
      this.router.navigate(['/dashboard']);
    });
  }
}
