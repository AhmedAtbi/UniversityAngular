import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicentralComponent } from './unicentral.component';

describe('UnicentralComponent', () => {
  let component: UnicentralComponent;
  let fixture: ComponentFixture<UnicentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
