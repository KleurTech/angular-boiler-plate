import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGridComponent } from './lib-grid.component';

describe('LibGridComponent', () => {
  let component: LibGridComponent;
  let fixture: ComponentFixture<LibGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
