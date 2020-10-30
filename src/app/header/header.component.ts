import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponentComponent } from '../dialog/dialog-component/dialog-component.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado.');
    });
  }
}
