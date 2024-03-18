import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent {
  currentColor: string = 'color: #db1225';

  constructor(){}
  
  public getRandomColor(): void {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.currentColor = 'color: ' + color;
  }
}
