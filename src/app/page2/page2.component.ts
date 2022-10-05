import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  hero1 = "The Flash";
  hero2 = "Spiderman";
  hero3 = "Superman";
  hero4 = "Wonder Woman";
  hero5 = "Green Lantern";

  constructor() { }

  ngOnInit(): void {
  }

}
