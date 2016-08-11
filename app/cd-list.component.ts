import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';
import { NewCdComponent } from './new-cd.component';
import { EditCdDetailsComponent } from './edit-cd-details.component';

@Component ({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  directives: [CdComponent, NewCdComponent, EditCdDetailsComponent],
  template: `
<!--  <select (change)='onChange($event.target.value)'>
    <option></option>
    <option></option>
    <option></option>
  </select> -->

  <cd-display *ngFor = '#currentCd of cdList'
    (click)='cdClicked(currentCd)'
    [class.selected]='currentCd === selectedCd'
    [cd]='currentCd'>
  </cd-display>

  <edit-cd-details *ngIf='selectedCd' [cd]='selectedCd'
  (onSubmitEditCd)='editCdDetails($event.name, $event.artist, $event.price, $event.genre)'>
  </edit-cd-details>

  <new-cd (onSubmitNewCd)='createCd($event.name, $event.artist, $event.price, $event.genre)'></new-cd>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;

  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  createCd(name: string, artist: string, price: number, genre:string): void {
    this.cdList.push (
      new Cd(name, artist, price, genre, this.cdList.length)
    );
  }

  editCdDetails(name: string, artist: string, price: number, genre:string): void {
    this.cdList.push (
      new Cd(name, artist, price, genre, this.cdList.length)
    );
  }

  cdClicked(clickedCd: Cd) :void {
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
}
