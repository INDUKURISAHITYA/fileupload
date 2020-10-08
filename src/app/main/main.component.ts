import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  public output;

  
  
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open( DialogComponent,{
      height: '380px',
      width: '400px',
    });

    
    dialogRef.afterClosed().subscribe(result => {
      this.output= result;
    });
  }

  delete(image)
  {
    const index = this.output.indexOf(image);
    this.output.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
