import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleDataComponent } from './add-multiple-data.component';

describe('AddMultipleDataComponent', () => {
  let component: AddMultipleDataComponent;
  let fixture: ComponentFixture<AddMultipleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMultipleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMultipleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
