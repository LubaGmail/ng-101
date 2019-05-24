import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFav = false;
  title = '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFav = !this.isFav;
  }

}
