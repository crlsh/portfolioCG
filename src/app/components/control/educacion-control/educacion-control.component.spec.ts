import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionControlComponent } from './educacion-control.component';

describe('EducacionControlComponent', () => {
  let component: EducacionControlComponent;
  let fixture: ComponentFixture<EducacionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
