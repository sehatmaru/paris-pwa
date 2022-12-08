import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeirStatusComponent } from './heir-status.component';

describe('HeirStatusComponent', () => {
  let component: HeirStatusComponent;
  let fixture: ComponentFixture<HeirStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeirStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeirStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
