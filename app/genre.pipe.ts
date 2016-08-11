import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
  name:'genre',
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform = function(input: Cd[], args) {
    var selectedCdGenre = args[0];
    console.log(args);
    var output: Cd[] = [];
    if (selectedCdGenre === 'pop') {
      for (var i = 0; i <input.length; i++) {
        if (input[i].genre === 'pop') {
          output.push(input[i]);
        }
      }
    } else if (selectedCdGenre === 'hipHop') {
      for (var i = 0; i <input.length; i++) {
        if (input[i].genre === 'hipHop') {
          output.push(input[i]);
        }
      }
    } else if (selectedCdGenre === 'spokenWord') {
      for (var i = 0; i <input.length; i++) {
        if (input[i].genre === 'spokenWord') {
          output.push(input[i]);
        }
      }
    } else if (selectedCdGenre === 'classical') {
      for (var i = 0; i <input.length; i++) {
        if (input[i].genre === 'classical') {
          output.push(input[i]);
        }
      }
    } else if (selectedCdGenre === 'other') {
      for (var i = 0; i <input.length; i++) {
        if (input[i].genre === 'other') {
          output.push(input[i]);
        }
      }
    } else {
      for (var i = 0; i <input.length; i++) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
