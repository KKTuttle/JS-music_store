import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';
import { NewCdComponent } from './new-cd.component';
import { EditCdDetailsComponent } from './edit-cd-details.component';
import { GenrePipe } from './genre.pipe';

@Component ({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  pipes: [GenrePipe],
  directives: [CdComponent, NewCdComponent, EditCdDetailsComponent],
  template: `

  <select (change)='onChange($event.target.value)'>
    <option value='all'>All</option>
    <option value='pop'>Pop</option>
    <option value='hipHop'>Hip-Hop</option>
    <option value='spokenWord'>Spoken word</option>
    <option value='classical'>Classical</option>
    <option value='other'>Other</option>
  </select>

  <cd-display *ngFor = '#currentCd of cdList |genre:filterGenre'
    (click)='cdClicked(currentCd)'
    [class.selected]='currentCd === selectedCd'
    [cd]='currentCd'>
  </cd-display>

  <edit-cd-details *ngIf='selectedCd' [cd]='selectedCd'
  (onSubmitEditCd)='editCdDetails($event.name, $event.artist, $event.price, $event.genre, selectedCd)'>
  </edit-cd-details>

  <new-cd (onSubmitNewCd)='createCd($event.name, $event.artist, $event.price, $event.genre)'></new-cd>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  public filterGenre: string = "all";

  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  createCd(name: string, artist: string, price: number, genre:string): void {
    this.cdList.push (
      new Cd(name, artist, price, genre, this.cdList.length)
    );
  }

  editCdDetails(name: string, artist: string, price: number, genre:string, thisCd: Cd): void {
      thisCd.name = name;
      thisCd.artist = artist;
      thisCd.price = price;
      thisCd.genre = genre;
  }

  cdClicked(clickedCd: Cd) :void {
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }

  onChange(filterOption) {
    this.filterGenre = filterOption;
    console.log(this.filterGenre);
  }
}
