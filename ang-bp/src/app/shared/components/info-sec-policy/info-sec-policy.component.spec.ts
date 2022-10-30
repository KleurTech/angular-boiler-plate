import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecPolicyComponent } from './info-sec-policy.component';

describe('InfoSecPolicyComponent', () => {
  let component: InfoSecPolicyComponent;
  let fixture: ComponentFixture<InfoSecPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSecPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSecPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
