import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSnackBarMessageComponent } from './error-snack-bar-message.component';

describe('ErrorSnackBarMessageComponent', () => {
  let component: ErrorSnackBarMessageComponent;
  let fixture: ComponentFixture<ErrorSnackBarMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSnackBarMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSnackBarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
