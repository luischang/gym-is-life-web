import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilLibComponent } from './gil-lib.component';

describe('GilLibComponent', () => {
  let component: GilLibComponent;
  let fixture: ComponentFixture<GilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
