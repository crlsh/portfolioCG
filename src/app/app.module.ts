import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './portfolio/nav-bar/nav/nav.component';
import { SocialLinkComponent } from './portfolio/components/social-link/social-link.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { HomeComponent } from './portfolio/home/home.component';
import { PagErrorComponent } from './portfolio/pag-error/pag-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './portfolio/nav-bar/iniciar-sesion/iniciar-sesion.component';
import { InterceptorService } from './services/api-rest/interceptor.service';
import { ControlModule } from './portfolio/components/control/control.module';
import { LoginButtonsComponent } from './portfolio/nav-bar/login-buttons/login-buttons.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SocialLinkComponent,
    FooterComponent,
    HomeComponent,
    PagErrorComponent,
    IniciarSesionComponent,
    LoginButtonsComponent,
  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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

})
export class AppModule { }
