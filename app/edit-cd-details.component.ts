import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-cd-details',
  outputs: ['Cd'],
  template:`
  <div class="cd-form col-sm-6">
    <label for="name">Name</label>
    <input class='form-control' placeholder="name" class="col-sm-8 input-lg" [(ngModel)]="Cd.name">

    <label for="artist">Artist</label>
    <input placeholder="artist" class="col-sm-8 input-lg" [(ngModel)]="Cd.artist">

    <label for="price">Price</label>
    <input type ='number' placeholder="price" class="col-sm-8 input-lg" [(ngModel)]="Cd.price">

    <label for="genre">Genre</label>
    <input placeholder="alcohol Content" class="col-sm-8 input-lg" [(ngModel)]="Cd.genre">

    <button (click)="addCd(newName, newArtist, newPrice, newGenre)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
