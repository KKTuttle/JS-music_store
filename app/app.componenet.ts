import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';

// @Component({
//   selector: 'my-app',
//   directives: [KegListComponent],
//   template: `
//     <div class="container">
//       <h1>Keg List</h1>
//       <keg-list
//         [kegList]="kegs"
//         (onKegSelect)="kegWasSelected($event)">
//       </keg-list>
//     <div>
//   `
// })
// export class AppComponent {
//   public kegs: Keg[];
//   constructor(){
//     this.kegs = [
//       new Keg("Total Domination", "Ninkasi", 6, 11, 0)
//     ];
//   }
//   kegWasSelected(clickedKeg: Keg): void {
//     console.log('parent', clickedKeg);
//   }
// }
