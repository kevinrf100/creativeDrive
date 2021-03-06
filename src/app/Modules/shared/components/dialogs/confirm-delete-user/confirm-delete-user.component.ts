import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-delete-user',
  templateUrl: './confirm-delete-user.component.html',
  styleUrls: ['./confirm-delete-user.component.css']
})
export class ConfirmDeleteUserComponent implements OnInit {

  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<ConfirmDeleteUserComponent>
  ) { }

  ngOnInit() {
  }

  action(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
