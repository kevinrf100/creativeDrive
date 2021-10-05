import { User } from './../../../models/user_model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-edit-dialog',
  templateUrl: './confirm-edit-dialog.component.html',
  styleUrls: ['./confirm-edit-dialog.component.css']
})
export class ConfirmEditDialogComponent implements OnInit {

  user: User;

  constructor(
    public dialogRef: MatDialogRef<ConfirmEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.user = data;
  }

  ngOnInit() {
  }

  action(confirm: boolean) {
    this.dialogRef.close(confirm);
  }

}
