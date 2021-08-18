import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginpopupComponent } from "../loginpopup/loginpopup.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginpopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      //(`Dialog result: ${result}`);
    });
  }
}
