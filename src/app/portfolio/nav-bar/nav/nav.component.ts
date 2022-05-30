import { Component,  HostListener,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/api-rest/autentication.service';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { Redes } from 'src/app/models/Redes';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isScrolled = false;

  login!:any;
  $estado!: boolean;


  constructor(private router: Router,
              private loginService:LoginService, 
              private autenticationServ: AutenticationService, 
      
              private servicioDatosService: ServicioDatosService,
              ) { }

  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
 
  }

  iniciarSesion(){
    this.router.navigate(['login']);   
  }

  cerrarSesion(){
    this.autenticationServ.CerrarSesion();
    this.router.navigate(['home']);
  }

  @HostListener("window:scroll")

  scrollEvent() {
      window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

 
}
