import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-formulaire-hero',
  templateUrl: './formulaire-hero.component.html',
  styleUrls: ['./formulaire-hero.component.css']
})
  
export class FormulaireHeroComponent implements OnInit {

  hero: Hero = { nom: '' };
  
  constructor(
    private heroService: HeroService,
    public dialogRef: MatDialogRef<FormulaireHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero) { 
      
      if (data) { 
        this.hero = data;
      }
  }
  
  ngOnInit(): void {
  }

  addHero(heroFormAjout: NgForm) {
    if (heroFormAjout.valid) {
      this.heroService.addHero(this.hero).subscribe(
        _ => {
          heroFormAjout.resetForm();
          this.dialogRef.close("Héro ajouté!");
        }
      );
    }
  }

  updateHero(heroFormAjout: NgForm) {
    if (heroFormAjout.valid) {
      this.heroService.updateHero(this.hero).subscribe(
        _ => {
          heroFormAjout.resetForm();
          this.dialogRef.close("Héro modifié!");
        }
      );
    }
  }

  annuler() { 
    this.dialogRef.close();
  }

}
