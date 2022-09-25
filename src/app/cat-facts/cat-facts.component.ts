import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CatDataClass} from "../core/models/cat-data-class";
import {HttpClient} from "@angular/common/http";
import {CatApiService} from "../core/services/cat-api.service";
import {debounceTime, fromEvent, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit, OnDestroy {
  public data: any = {};
  public catFacts: CatDataClass[] = [];
  public allCatFacts: CatDataClass[]= [];
  public currentCatCount = 0;
  public isLoading = true;
  public searchForm: FormGroup;
  public button = document.querySelector('.get-cats-button');

  private click: any;

  constructor(private http: HttpClient, private catApiService: CatApiService) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
  }

  public ngOnInit(): void {
    this.getCatData();
    this.debounceButton();
    this.subscribeToSearch();
  }

  public ngOnDestroy() {
  }

  public getCatData() {
    this.data = [];
    this.allCatFacts = [];

    // PUT HTTP CALL IN SERVICE FOR LOOSE COUPLING
    this.catApiService.getCatData().subscribe(
      response => {
        this.data = Object.values(response)['0'];
        },
      (error) => {console.error(error)},
      () => {
        this.putCatDataInArray();
        setTimeout(() => {
          this.isLoading = false;
        }, 750);
      });
  }

  public putCatDataInArray() {
    this.catFacts = [];

    this.data.map( (catFact: string, index: number) => {
      this.currentCatCount += 1;
      this.catFacts.push({catId: this.currentCatCount + index, catFact: catFact});
      this.allCatFacts.push({catId: this.currentCatCount + index, catFact: catFact});
    });
  }

  public orderByDescending() {
   this.catFacts = this.catFacts.sort((a,b) => (a.catId < b.catId) ? 1 : -1);
  }

  public debounceButton() {
    this.button = document.querySelector('.get-cats-button');

    if(this.button){
      this.click = fromEvent(this.button, 'click').pipe(
        debounceTime(1000),
        tap(() => {
          this.getCatData();
        }),
      ).subscribe();
    }
  }

  // Search
  public subscribeToSearch() {
    this.searchForm.controls['search'].valueChanges.subscribe( changes => {
      this.applySearchFilter(changes);
    });
  }

  public applySearchFilter(searchValue: string) {
    this.catFacts = this.allCatFacts;
    let searchedForCatFacts: CatDataClass[];

    searchedForCatFacts = this.catFacts.filter((catFact) => {
      return catFact.catFact.toString().toLowerCase().indexOf(searchValue.toString().toLowerCase()) > -1;
    });

    this.catFacts = searchedForCatFacts;
  }

}
