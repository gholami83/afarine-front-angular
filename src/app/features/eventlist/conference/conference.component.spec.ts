import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceComponent } from './conference.component';

describe('ConferenceComponent', () => {
  let component: ConferenceComponent;
  let fixture: ComponentFixture<ConferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceComponent]
    });
    fixture = TestBed.createComponent(ConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
