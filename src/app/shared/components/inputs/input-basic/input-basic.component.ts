import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.css']
})
export class InputBasicComponent implements OnInit {

  @Input() inputName: string;
  @Input() inputFormControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
