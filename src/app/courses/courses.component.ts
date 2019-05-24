import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <hr />
    <h3>{{title.length}} {{title}}</h3>
    <ul>
      <li *ngFor='let c of courses'>{{c}}</li>
    </ul>
    <button class='btn btn-primary'>Save</button>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Courses';
  courses = ['Course 1', 'Course 2', 'Course 3'];

  constructor() { }

  ngOnInit() {
  }

  getCourses() {
    return this.courses;
  }

}
