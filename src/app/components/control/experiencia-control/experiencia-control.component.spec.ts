import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaControlComponent } from './experiencia-control.component';

describe('ExperienciaControlComponent', () => {
  let component: ExperienciaControlComponent;
  let fixture: ComponentFixture<ExperienciaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
