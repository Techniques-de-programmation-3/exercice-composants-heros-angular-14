import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';

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

  newHero: Hero = { nom: '' };

  constructor(private heroService: HeroService) { 
    
  }

  ngOnInit(): void {
    this.getHeros()
  }

  getHeros() { 
    this.heroService.getHeros().subscribe(
      resultat => {
        this.dataSourceHeros = new MatTableDataSource(resultat);
        this.dataSourceHeros.paginator = this.paginator;
        this.dataSourceHeros.sort = this.sort;
        this.tableHeros.renderRows();
      }
    );
  }

  addHero(heroFormAjout: NgForm) { 
    if (heroFormAjout.valid) { 
      this.heroService.addHero(this.newHero).subscribe(
        _ => {
          heroFormAjout.resetForm();
          this.getHeros();
        }
      );
    }
  }

  deleteHero(_id: string) { 
    this.heroService.deleteHero(_id).subscribe(
      _ => {
        this.getHeros();
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
