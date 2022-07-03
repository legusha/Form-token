import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTokenComponent } from './form-token.component';

describe('FormComponent', () => {
  let component: FormTokenComponent;
  let fixture: ComponentFixture<FormTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
