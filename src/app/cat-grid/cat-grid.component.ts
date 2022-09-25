import { Component, Input } from '@angular/core';
import { CatDataClass } from "../core/models/cat-data-class";

@Component({
  selector: 'app-cat-grid',
  templateUrl: './cat-grid.component.html',
  styleUrls: ['./cat-grid.component.scss']
})
export class CatGridComponent {
  @Input() public catFacts: CatDataClass[] = [];

  constructor() {
  }

}
