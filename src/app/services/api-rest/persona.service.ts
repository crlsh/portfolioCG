import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    // url2='http://localhost:8080/api'; 
  url2="https://apiportfolio-cg.herokuapp.com/api";
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/personas/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/personas');
	}
  //terminar en algun momento
  update(id: number, persona: any): Observable<any>{
    return this.http.put(this.url2 + `/personas/${id}`, persona);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/personas/${id}`);
  }
 save(persona:any) : Observable<any>{
   return this.http.post(this.url2 + `/personas/`, persona);
 }


}
