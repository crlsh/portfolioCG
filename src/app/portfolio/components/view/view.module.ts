import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsViewComponent } from './skills-view/skills-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienciaViewComponent } from './experiencia-view/experiencia-view.component';
import { EducacionViewComponent } from './educacion-view/educacion-view.component';
import { ProyectosViewComponent } from './proyectos-view/proyectos-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { BannerViewComponent } from './banner-view/banner-view.component';
import { RedesModule } from '../../redes/redes.module';







@NgModule({
  declarations: [
    SkillsViewComponent,
    ExperienciaViewComponent,
    EducacionViewComponent,
    ProyectosViewComponent,
    AboutViewComponent,
    BannerViewComponent,

  
    

  ],
  imports: [
    CommonModule, 
    SharedModule,
  RedesModule,
 
  ],
  exports: [


    BannerViewComponent,
    ExperienciaViewComponent,
    SkillsViewComponent,
    EducacionViewComponent,
    ProyectosViewComponent,
    AboutViewComponent,
 
  ],
})
export class ViewModule { }
