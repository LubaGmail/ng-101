import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authors;
  courses;

  constructor (authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();

    const courses = new CoursesComponent();
    this.courses = courses.getCourses();

  }
}
