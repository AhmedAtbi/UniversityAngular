import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnilibreComponent } from './unilibre.component';

describe('UnilibreComponent', () => {
  let component: UnilibreComponent;
  let fixture: ComponentFixture<UnilibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnilibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnilibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
