import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  API_URL = 'https://heros-vjc9.onrender.com/api/heros';

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL);
  }
}
