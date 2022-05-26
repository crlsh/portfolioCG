import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsViewComponent } from './skills-view/skills-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienciaViewComponent } from './experiencia-view/experiencia-view.component';
import { EducacionViewComponent } from './educacion-view/educacion-view.component';
import { ProyectosViewComponent } from './proyectos-view/proyectos-view.component';



@NgModule({
  declarations: [
    SkillsViewComponent,
    ExperienciaViewComponent,
    EducacionViewComponent,
    ProyectosViewComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    ExperienciaViewComponent,
    SkillsViewComponent,
    EducacionViewComponent,
    ProyectosViewComponent
  ],
})
export class ViewModule { }
