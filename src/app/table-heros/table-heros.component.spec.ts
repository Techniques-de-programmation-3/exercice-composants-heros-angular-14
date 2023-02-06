import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHerosComponent } from './table-heros.component';

describe('TableHerosComponent', () => {
  let component: TableHerosComponent;
  let fixture: ComponentFixture<TableHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
