import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaViewComponent } from './experiencia-view.component';

describe('ExperienciaViewComponent', () => {
  let component: ExperienciaViewComponent;
  let fixture: ComponentFixture<ExperienciaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
