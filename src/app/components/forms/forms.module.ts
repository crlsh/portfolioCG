import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienciaFormComponent } from './experiencia-form/experiencia-form.component';
import { EducacionFormComponent } from './educacion-form/educacion-form.component';
import { ProyectosFormComponent } from './proyectos-form/proyectos-form.component';



@NgModule({
  declarations: [
    SkillsFormComponent,
    ExperienciaFormComponent,
    EducacionFormComponent,
    ProyectosFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    ExperienciaFormComponent,
    SkillsFormComponent,
    EducacionFormComponent,
    ProyectosFormComponent
  ],
})
export class FormsModule { }
