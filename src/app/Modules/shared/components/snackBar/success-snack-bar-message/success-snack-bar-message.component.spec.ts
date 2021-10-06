import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSnackBarMessageComponent } from './success-snack-bar-message.component';

describe('SuccessSnackBarMessageComponent', () => {
  let component: SuccessSnackBarMessageComponent;
  let fixture: ComponentFixture<SuccessSnackBarMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessSnackBarMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSnackBarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
