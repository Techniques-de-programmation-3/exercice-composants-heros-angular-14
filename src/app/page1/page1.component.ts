import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  hero1 = "The Flash";
  hero2 = "Spiderman";
  hero3 = "Superman";

  constructor() { }

  ngOnInit(): void {
  }

}
