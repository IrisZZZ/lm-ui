import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmDemoPageComponent } from './lm-demo-page.component';

describe('LmDemoPageComponent', () => {
  let component: LmDemoPageComponent;
  let fixture: ComponentFixture<LmDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
