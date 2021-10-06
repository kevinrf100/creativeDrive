import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-error-snack-bar-message',
  templateUrl: './error-snack-bar-message.component.html',
  styleUrls: ['./error-snack-bar-message.component.css']
})
export class ErrorSnackBarMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public message) { }

  ngOnInit() {
  }

}
