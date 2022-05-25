import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienciaFormComponent } from './experiencia-form/experiencia-form.component';



@NgModule({
  declarations: [
    SkillsFormComponent,
    ExperienciaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    ExperienciaFormComponent,
    SkillsFormComponent
  ],
})
export class FormsModule { }
