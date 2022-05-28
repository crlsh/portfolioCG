import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsControlComponent } from './skills-control.component';

describe('SkillsControlComponent', () => {
  let component: SkillsControlComponent;
  let fixture: ComponentFixture<SkillsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
