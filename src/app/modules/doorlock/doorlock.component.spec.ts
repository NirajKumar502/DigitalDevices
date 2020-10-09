import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorlockComponent } from './doorlock.component';

describe('DoorlockComponent', () => {
  let component: DoorlockComponent;
  let fixture: ComponentFixture<DoorlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
