import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AllPayments } from 'src/app/model/allPayments';
import { Payment } from 'src/app/model/payment';
import { DatePipe } from '@angular/common';
import { PaystraxServiceService } from 'src/app/services/paystrax-service.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['CreationTimeUtc', 'fromAddress', 'toAddress', 'amount', 'paymentStatus', 'action'];
  allPayments: Payment[] = [];
  dataSource: MatTableDataSource<Payment> = new MatTableDataSource(this.allPayments);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  token: string;

  constructor(private paystraxServiceService : PaystraxServiceService,private router: Router,public datepipe: DatePipe ) { 
    
    this.token = String(localStorage.getItem("userBearer"));
    if(Number(this.token?.length) > 0){
      (<HTMLAnchorElement>document.getElementById("dashboard")).style.display = "block";
      (<HTMLAnchorElement>document.getElementById("createpayment")).style.display = "block";
      (<HTMLAnchorElement>document.getElementById("logout")).style.display = "block";
    }
    this.paystraxServiceService.GetAllRequests(this.token).subscribe(p =>{
       this.allPayments = p.data.requests;
       this.dataSource = new MatTableDataSource(this.allPayments);
       //console.log(this.allPayments);
     });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  goToDetailpage(guid: string){
    this.router.navigate(['/paymentdetails/'+ guid]);
  }

  getCreatedTime(date:string){
      return String(this.datepipe.transform(date, 'MMM dd,yyyy'));
  }

  ngOnInit(): void {
  }
}
