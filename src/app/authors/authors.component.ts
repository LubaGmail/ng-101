import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `
    {{title}}
  
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = 'Courses';

  constructor() { }

  ngOnInit() {  
  }

}
