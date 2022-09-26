import { Component } from '@angular/core';

@Component({
  selector: 'app-raining-cats',
  templateUrl: './raining-cats.component.html',
  styleUrls: ['./raining-cats.component.scss']
})
export class RainingCatsComponent {
  public cats: number[] = [];
  private max: number = 10;

  constructor() { }

  // create a random number of loops, up to max, to add an element to cats array
  // cat graphic in img added to DOM for each element in the array
  public addCats() {
    this.cats=[];
    for(let i=0; i< Math.floor(Math.random() * this.max+1); i++ ){
      this.cats.push(1);
    }
  }
}
