import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDijitaldepoComponent } from './project-dijitaldepo.component';

describe('ProjectDijitaldepoComponent', () => {
  let component: ProjectDijitaldepoComponent;
  let fixture: ComponentFixture<ProjectDijitaldepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDijitaldepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDijitaldepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
