import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-cd-details',
  inputs: ['cd'],
  template:`
  <div class="cd-form col-sm-6">

    <h2>Edit {{cd.name}}</h2>
    <label for="name">Name</label>
    <input [ngModel]="cd.name" #newName>"

    <label for="artist">Artist</label>
    <input [ngModel]="cd.artist" #newArtist>

    <label for="price">Price</label>
    <input type ='number' [ngModel]="cd.price" #newPrice>

    <label for="genre">Genre</label>
    <input [ngModel]="cd.genre" #newGenre>

    <button (click)='editCd(newName, newArtist, newPrice, newGenre)'>Edit</button>

  </div>
  `
})

export class EditCdDetailsComponent {
  public cd: Cd;
  public onSubmitEditCd: EventEmitter<Object>;
  constructor() {
    this.onSubmitEditCd = new EventEmitter();
  }
  editCd(userName: HTMLInputElement, userArtist: HTMLInputElement, userPrice: HTMLInputElement, userGenre: HTMLInputElement) {
    this.onSubmitEditCd.emit({
      name: userName.value,
      artist: userArtist.value,
      price: userPrice.value,
      genre: userGenre.value
    });
  }
}
