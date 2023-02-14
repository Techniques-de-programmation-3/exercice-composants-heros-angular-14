import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  API_URL = 'https://heros-vjc9.onrender.com/api/heros';

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL);
  }

  addHero(hero:Hero): Observable<void> {
    return this.http.post<void>(this.API_URL, hero, httpOptions);
  }

  updateHero(hero: Hero): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${hero._id}`, hero, httpOptions);
  }

  deleteHero(_id: string): Observable<void> {
    console.log(`${this.API_URL}\\${_id}`);
    return this.http.delete<void>(`${this.API_URL}/${_id}`, httpOptions);
  }
}
