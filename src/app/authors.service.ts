import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors = ['Author 1', 'Author2', 'Author3'];

  constructor() { }

  getAuthors = () => {
    return this.authors;
  }
}
