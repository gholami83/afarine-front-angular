import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstituteComponent } from './card-institute.component';

describe('CardInstituteComponent', () => {
  let component: CardInstituteComponent;
  let fixture: ComponentFixture<CardInstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInstituteComponent]
    });
    fixture = TestBed.createComponent(CardInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
