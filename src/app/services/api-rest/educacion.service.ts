import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

    // url2='http://localhost:8080/api'; 
  url2="https://apiportfolio-cg.herokuapp.com/api";
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/educacion/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/educacion');
	}
  //terminar en algun momento
  update(id: number, edu: any): Observable<any>{
    return this.http.put(this.url2 + `/educacion/${id}`, edu);
    console.log("update service educacion", id, edu)
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/educacion/${id}`);
   
  }
 save(edu:any) : Observable<any>{
   return this.http.post(this.url2 + `/educacion/`, edu);
 }
}


