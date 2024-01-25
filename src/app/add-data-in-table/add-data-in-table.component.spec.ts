import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataInTableComponent } from './add-data-in-table.component';

describe('AddDataInTableComponent', () => {
  let component: AddDataInTableComponent;
  let fixture: ComponentFixture<AddDataInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataInTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
