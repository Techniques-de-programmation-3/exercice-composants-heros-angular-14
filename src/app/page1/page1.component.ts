import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  heros: Hero[] = [];  //HEROS;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(resultat => this.heros = resultat);
  }


}
