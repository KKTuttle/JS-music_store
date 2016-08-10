import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'new-cd',
  outputs: ['onSubmitNewCd'],
  template:`
  <div class="cd-form col-sm-6">
    <h3>Create CD:</h3>
    <label for="name">Name</label>
    <input class='form-control' placeholder="name" class="col-sm-8 input-lg" #newName>

    <label for="artist">Artist</label>
    <input placeholder="artist" class="col-sm-8 input-lg" #newArtist>

    <label for="price">Price</label>
    <input type ='number' placeholder="price" class="col-sm-8 input-lg" #newPrice>

    <label for="genre">Genre</label>
    <input placeholder="alcohol Content" class="col-sm-8 input-lg" #newGenre>

    <button (click)="addCd(newName, newArtist, newPrice, newGenre)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewCdComponent {
  public onSubmitNewCd: EventEmitter<Object>;
  constructor() {
    this.onSubmitNewCd = new EventEmitter();
  }
  addCd(userName: HTMLInputElement, userArtist: HTMLInputElement, userPrice: HTMLInputElementm, userGenre: HTMLInputElement) {
    this.onSubmitNewCd.emit({
      name: userName.value,
      artist: userArtist.value,
      price: userPrice.value,
      genre: userGenre.value
    });
    userName.value = '';
    userArtist.value = '';
    userPrice.value = '';
    userGenre.value = '';

  }
}
