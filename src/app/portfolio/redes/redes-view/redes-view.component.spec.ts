import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesViewComponent } from './redes-view.component';

describe('RedesViewComponent', () => {
  let component: RedesViewComponent;
  let fixture: ComponentFixture<RedesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
