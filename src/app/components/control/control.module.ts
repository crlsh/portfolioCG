import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsControlComponent } from './skills-control/skills-control.component';
import { ViewModule } from '../view/view.module';
import { FormsModule } from '../forms/forms.module';
import { ExperienciaControlComponent } from './experiencia-control/experiencia-control.component';
import { EducacionControlComponent } from './educacion-control/educacion-control.component';
import { ProyectosControlComponent } from './proyectos-control/proyectos-control.component';
import { AboutControlComponent } from './about-control/about-control.component';



@NgModule({
  declarations: [
    SkillsControlComponent,
    ExperienciaControlComponent,
  EducacionControlComponent,
  ProyectosControlComponent,
  AboutControlComponent,
  
  ],
  
  imports: [
    CommonModule, 
    ViewModule,
    FormsModule,

  ],
  exports: [
    SkillsControlComponent,
    ExperienciaControlComponent,
    EducacionControlComponent,
    ProyectosControlComponent,
    AboutControlComponent
  ],
})
export class ControlModule { }
