import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-formulaire-hero',
  templateUrl: './formulaire-hero.component.html',
  styleUrls: ['./formulaire-hero.component.css']
})
export class FormulaireHeroComponent implements OnInit {
  
  newHero: Hero = { nom: '' };
  
  constructor(private heroService: HeroService, public dialogRef: MatDialogRef<FormulaireHeroComponent>) { }

  ngOnInit(): void {
  }

  addHero(heroFormAjout: NgForm) {
    if (heroFormAjout.valid) {
      this.heroService.addHero(this.newHero).subscribe(
        _ => {
          heroFormAjout.resetForm();
          this.dialogRef.close();
          //this.heroAjoute.emit();
        }
      );
    }
  }

  annuler() { 
    this.dialogRef.close();
  }

}
