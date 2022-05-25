import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsControlComponent } from './skills-control/skills-control.component';
import { ViewModule } from '../view/view.module';
import { FormsModule } from '../forms/forms.module';
import { ExperienciaControlComponent } from './experiencia-control/experiencia-control.component';



@NgModule({
  declarations: [
    SkillsControlComponent,
    ExperienciaControlComponent
  ],
  imports: [
    CommonModule, 
    ViewModule,
    FormsModule
  ],
  exports: [
    SkillsControlComponent,
    ExperienciaControlComponent
  ],
})
export class ControlModule { }
