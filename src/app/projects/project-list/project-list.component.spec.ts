import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { Project } from '../shared/project.model';
import { MOCK_PROJECTS } from '../shared/mock-projects';

@Component({
  selector: 'app-project-card',
  template: `<h1>Project Card Here</h1>
    {{ project | json }}`,
})
class ProjectCardStubComponent {
  @Input()
  project: Project | null = null;
  @Output()
  edit = new EventEmitter<any>();
}

@Component({
  selector: 'app-project-form',
  template: `{{ project | json }}`,
})
class ProjectFormStubComponent {
  @Input()
  project!: Project;
}

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ProjectListComponent,
          ProjectCardStubComponent,
          ProjectFormStubComponent,
        ],
        // schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    component.editingProject = MOCK_PROJECTS[1];
    component.projects = MOCK_PROJECTS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects', () => {
    expect(component.projects.length).toEqual(7);
  });

  it('should display projects', () => {
    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Scarlet Weeknight');
    expect(content).toContain('Matdexon');
    expect(content).toContain('Remote Wrench');
  });

  it('has card been stubbed', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('Project Card Here');
  });
});
