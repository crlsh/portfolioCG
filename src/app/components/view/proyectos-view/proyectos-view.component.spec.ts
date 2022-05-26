import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosViewComponent } from './proyectos-view.component';

describe('ProyectosViewComponent', () => {
  let component: ProyectosViewComponent;
  let fixture: ComponentFixture<ProyectosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
