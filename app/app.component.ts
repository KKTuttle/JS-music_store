import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdListComponent } from './cd-list.component';


@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  template: `
    <div class="container">
      <h1>Cd List</h1>
      <cd-list
        [cdList]="cds"
        (onCdSelect)="cdWasSelected($event)">
      </cd-list>
    <div>
  `
})
export class AppComponent {
  public cds: Cd[];
  constructor(){
    this.cds = [
      new Cd("Surprise", "KK.Tuttle", 20, 'pop', 0),
      new Cd("Quantum Diversions", "C#", 25, 'spokenWord', 1)
    ];
  }
  cdWasSelected(clickedCd: Cd): void {
    console.log('parent', clickedCd);
  }
}
