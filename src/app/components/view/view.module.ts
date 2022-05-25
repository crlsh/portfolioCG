import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsViewComponent } from './skills-view/skills-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SkillsViewComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    SkillsViewComponent
  ],
})
export class ViewModule { }
