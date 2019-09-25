import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSatComponent } from './project-sat.component';

describe('ProjectSatComponent', () => {
  let component: ProjectSatComponent;
  let fixture: ComponentFixture<ProjectSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
