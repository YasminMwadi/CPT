import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppliedJobsComponent } from './dashboard-applied-jobs.component';

describe('DashboardAppliedJobsComponent', () => {
  let component: DashboardAppliedJobsComponent;
  let fixture: ComponentFixture<DashboardAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAppliedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
