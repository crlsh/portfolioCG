import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';



import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DeletebuttonComponent } from './components/deletebutton/deletebutton.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';



import { AboutModalComponent } from './components/modales/about-modal/about-modal.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { ProfileModalComponent } from './components/modales/profile-modal/profile-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InterceptorService } from './services/api-rest/interceptor.service';

import { ControlModule } from './components/control/control.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ProfileComponent,
    SocialLinkComponent,


    BannerComponent,

    FooterComponent,
    HomeComponent,
    DeletebuttonComponent,
    EditbuttonComponent,
    AddbuttonComponent,




    AboutModalComponent,
    PagErrorComponent,
    ProfileModalComponent,
    IniciarSesionComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({"responsive": true}),
 
    ReactiveFormsModule,


    //modulos
    ControlModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [AboutModalComponent, ProfileModalComponent] //habilia al componente para que se pueda usar en un modal
})
export class AppModule { }
