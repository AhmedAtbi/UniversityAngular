import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItbsComponent } from './itbs.component';

describe('ItbsComponent', () => {
  let component: ItbsComponent;
  let fixture: ComponentFixture<ItbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
