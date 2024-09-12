import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilRComponent } from './accueil-r.component';

describe('AccueilRComponent', () => {
  let component: AccueilRComponent;
  let fixture: ComponentFixture<AccueilRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
