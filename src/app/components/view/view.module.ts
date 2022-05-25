import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsViewComponent } from './skills-view/skills-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienciaViewComponent } from './experiencia-view/experiencia-view.component';



@NgModule({
  declarations: [
    SkillsViewComponent,
    ExperienciaViewComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    ExperienciaViewComponent,
    SkillsViewComponent
  ],
})
export class ViewModule { }
