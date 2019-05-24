import { Component, OnInit } from '@angular/core';
import { SummaryPipe } from './../summary.pipe';

@Component({
  selector: 'app-blogs',
  template: `
    <hr>
    <h3>Blogs</h3> 
    <div>
      {{text | summary}}
    </div>
  `,
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  text = 'aaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd';

  constructor() { }

  ngOnInit() {
  }

}
