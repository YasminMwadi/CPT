import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSavedJobsComponent } from './dashboard-saved-jobs.component';

describe('DashboardSavedJobsComponent', () => {
  let component: DashboardSavedJobsComponent;
  let fixture: ComponentFixture<DashboardSavedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSavedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSavedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
