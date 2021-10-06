import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-cpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.css']
})
export class InputCPFComponent implements OnInit {

  @Input() cpfFormControl: FormControl;

  inputName = 'CPF';

  constructor() { }

  ngOnInit() {
  }

}

export function validateCpf(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value ? (control.value.length === 11 ? null : {cpfFormat: true}) : null;
}
