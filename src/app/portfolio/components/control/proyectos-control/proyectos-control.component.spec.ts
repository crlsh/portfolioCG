import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosControlComponent } from './proyectos-control.component';

describe('ProyectosControlComponent', () => {
  let component: ProyectosControlComponent;
  let fixture: ComponentFixture<ProyectosControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
