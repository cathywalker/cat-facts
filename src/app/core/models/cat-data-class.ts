import { CatDataInterface } from './cat-data-interface';

export class CatDataClass implements CatDataInterface {
  public catId: number;
  public catFact: string;

  public constructor(catId: number, catFact: string) {
    this.catId = catId;
    this.catFact = catFact;
  }
}
