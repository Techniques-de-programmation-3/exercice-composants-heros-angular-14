import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulaireHeroComponent } from '../formulaire-hero/formulaire-hero.component';

@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {
  dataSourceHeros: MatTableDataSource<Hero> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableHeros!: MatTable<Hero>;

  constructor(private heroService: HeroService, private _snackBar: MatSnackBar, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() { 
    this.heroService.getHeros().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceHeros = new MatTableDataSource(resultat);
        this.dataSourceHeros.paginator = this.paginator;
        this.dataSourceHeros.sort = this.sort;
        this.tableHeros.renderRows();
      }
    );
  }

  openDialog(hero?: Hero) { 
    console.log(hero);
    const dialogRef = this.dialog.open(FormulaireHeroComponent, {
        data: hero
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire de héro a été fermé');
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getHeros();
    });
  }

  deleteHero(_id: string) { 
    this.heroService.deleteHero(_id).subscribe(
      _ => {
        this.getHeros();
        this._snackBar.open("Héro supprimé!", undefined, {
          duration: 2000
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceHeros.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHeros.paginator) {
      this.dataSourceHeros.paginator.firstPage();
    }
  }

}
