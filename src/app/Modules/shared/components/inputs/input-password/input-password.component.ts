import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  hide = true;

  @Input() passwordForm: FormControl;
  @Input() inputName = 'Password';

  constructor() { }

  ngOnInit() {
  }

}
