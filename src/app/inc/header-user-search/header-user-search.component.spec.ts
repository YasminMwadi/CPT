import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserSearchComponent } from './header-user-search.component';

describe('HeaderUserSearchComponent', () => {
  let component: HeaderUserSearchComponent;
  let fixture: ComponentFixture<HeaderUserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
