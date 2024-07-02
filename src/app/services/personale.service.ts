import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personale, Post } from '../models/personale';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaleService {

  constructor(private http: HttpClient) { }

  getPersonale(): Observable<Personale[]> {
    return this.http.get<Personale[]>(environment.API_BASE_URL + "/users")
  }

  getPersonaleById(id: number):Observable<Personale>{
    return this.http.get<Personale>(environment.API_BASE_URL +"/users/" + id)
  }

  getPosts(id:string):Observable<Post[]>{

    return this.http.get<Post[]>(environment.API_BASE_URL +"/posts?userId="+ id)
  }
}
