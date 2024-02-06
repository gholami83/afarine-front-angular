import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterAsideComponent } from './card-filter-aside.component';

describe('CardFilterAsideComponent', () => {
  let component: CardFilterAsideComponent;
  let fixture: ComponentFixture<CardFilterAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFilterAsideComponent]
    });
    fixture = TestBed.createComponent(CardFilterAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
