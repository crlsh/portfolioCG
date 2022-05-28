import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   
  url2="https://apiportfolio-cg.herokuapp.com/api";
  
  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  } 

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    console.log("login user", this.user);
    return this.http.post(`https://apiportfolio-cg.herokuapp.com/api/login`, this.user);
    
	 
    console.log("login user", this.user);
	}

  
}
