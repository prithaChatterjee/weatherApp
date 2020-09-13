import { Component, OnInit,Inject } from '@angular/core';
import {Body} from './../body'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  newCity  = new Body('',0,'');
  val;
  submitValue(val){
    this.val = val;
    console.log(val);
  }

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
