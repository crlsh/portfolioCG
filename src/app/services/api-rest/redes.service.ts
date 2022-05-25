import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  url2='https://apiportfolio-cg.herokuapp.com/api';
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/redes/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/redes');
	}
  //terminar en algun momento
  update(id: number, red: any): Observable<any>{
    return this.http.put(this.url2 + `/redes/${id}`, red);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/redes/${id}`);
  }
 save(red:any) : Observable<any>{
   return this.http.post(this.url2 + `/redes/`, red);
 }
}
