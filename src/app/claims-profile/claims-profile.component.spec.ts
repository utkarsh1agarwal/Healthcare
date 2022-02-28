import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsProfileComponent } from './claims-profile.component';

describe('ClaimsProfileComponent', () => {
  let component: ClaimsProfileComponent;
  let fixture: ComponentFixture<ClaimsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
