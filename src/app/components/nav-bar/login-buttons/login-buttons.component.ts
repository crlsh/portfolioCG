import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/api-rest/autentication.service';
import { LoginService } from 'src/app/services/api-rest/login.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent implements OnInit {

    
  login:any;



  constructor(private router: Router, 
              private loginService:LoginService, 
              private autenticationServ: AutenticationService, 
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
}
