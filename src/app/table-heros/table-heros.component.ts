import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {
  dataSourceHeros: MatTableDataSource<Hero> = new MatTableDataSource();
  columnsToDisplay = ['nom'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
      }
    );
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceHeros.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHeros.paginator) {
      this.dataSourceHeros.paginator.firstPage();
    }
  }

}
