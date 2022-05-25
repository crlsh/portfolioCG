import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkillsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    SkillsFormComponent
  ],
})
export class FormsModule { }
