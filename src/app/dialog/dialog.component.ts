import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  public images: any = [];
  public allfiles: any = [];

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {}

  fileupload(event): void {
    const files = event.target.files;
    console.log(files)
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = {
          name: '',
          type: '',
          size: '',
          // url: '',
        };
        console.log(this.allfiles.push(files[i]));
        image.name = files[i].name;
        image.type = files[i].type;
        image.size = files[i].size;
      }
    }
 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
