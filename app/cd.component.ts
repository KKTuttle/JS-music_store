import { Component } from 'angular2/core';
import {Cd} from './cd.model';

@Component ({
  selector: 'cd-display',
  inputs: ['cd'],
  template:`
  <h3>Name: {{ cd.name }}</h3>
  <h3>Artist: {{ cd.artist }}</h3>
  <h3>Price: $ {{ cd.price }}</h3>
  <h3>Genre: {{ cd.genre }}</h3>
  <hr>

  `
})

export class CdComponent {
  public cd: Cd;

}
