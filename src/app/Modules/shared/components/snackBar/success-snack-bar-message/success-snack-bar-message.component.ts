import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-success-snack-bar-message',
  templateUrl: './success-snack-bar-message.component.html',
  styleUrls: ['./success-snack-bar-message.component.css']
})
export class SuccessSnackBarMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public message) { }

  ngOnInit() {
  }

}
