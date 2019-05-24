import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return;
  
    let words = value.split(' ');

    for (let i=0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPrepos(word)) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
   }
   
    return words.join(' '); 
  }

  private toTitleCase(word: string) : string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPrepos(word: string) : boolean {
    const prepos = ['of', 'the'];

    return prepos.includes(word.toLowerCase())
  }

}
