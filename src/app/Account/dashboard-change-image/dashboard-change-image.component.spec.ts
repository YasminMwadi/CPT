import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChangeImageComponent } from './dashboard-change-image.component';

describe('DashboardChangeImageComponent', () => {
  let component: DashboardChangeImageComponent;
  let fixture: ComponentFixture<DashboardChangeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChangeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChangeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
