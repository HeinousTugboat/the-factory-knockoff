import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildStepsGraphComponent } from './build-steps-graph.component';

describe('BuildStepsGraphComponent', () => {
  let component: BuildStepsGraphComponent;
  let fixture: ComponentFixture<BuildStepsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildStepsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildStepsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
