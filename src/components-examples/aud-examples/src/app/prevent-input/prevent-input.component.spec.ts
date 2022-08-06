import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventInputComponent } from './prevent-input.component';

describe('PreventInputComponent', () => {
  let component: PreventInputComponent;
  let fixture: ComponentFixture<PreventInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
