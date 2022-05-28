import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionViewComponent } from './educacion-view.component';

describe('EducacionViewComponent', () => {
  let component: EducacionViewComponent;
  let fixture: ComponentFixture<EducacionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
