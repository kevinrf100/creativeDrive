import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCPFComponent } from './input-cpf.component';

describe('InputCPFComponent', () => {
  let component: InputCPFComponent;
  let fixture: ComponentFixture<InputCPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
