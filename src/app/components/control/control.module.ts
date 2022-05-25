import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsControlComponent } from './skills-control/skills-control.component';
import { ViewModule } from '../view/view.module';
import { FormsModule } from '../forms/forms.module';



@NgModule({
  declarations: [
    SkillsControlComponent
  ],
  imports: [
    CommonModule, 
    ViewModule,
    FormsModule
  ],
  exports: [
    SkillsControlComponent
  ],
})
export class ControlModule { }
