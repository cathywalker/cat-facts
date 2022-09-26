import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CatDataClass} from "../core/models/cat-data-class";
import {HttpClient} from "@angular/common/http";
import {CatApiService} from "../core/services/cat-api.service";
import {debounceTime, fromEvent, Subscription, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit, OnDestroy {
  @ViewChild("getCatsButton", {static:true}) public button?:ElementRef;

  public data: any = {};
  public catFacts: CatDataClass[] = [];
  public allCatFacts: CatDataClass[]= [];
  public currentCatCount = 0;
  public isLoading = true;
  public searchForm: FormGroup;

  private clickSubscription$: Subscription;

  // initialize form and subscription
  constructor(private http: HttpClient, private catApiService: CatApiService) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.clickSubscription$ = new Subscription();
  }

  public ngOnInit(): void {
    this.getCatData();
    this.debounceButton();
    this.subscribeToSearch();
  }

  // unsubscribe from button observable on destroy
  public ngOnDestroy() {
    this.clickSubscription$.unsubscribe();
  }

  // method that gets the cat facts from the API
  // create observable. on successful return
  // it calls the putCatDataInArray method
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

  // called on successful return of data from API
  // shapes the data into the CatDataClass shape
  // fills 2 arrays one to show the user
  // one to keep all 6 cat facts for restocking the
  // user array on backspace in the search
  public putCatDataInArray() {
    this.catFacts = [];

    this.data.map( (catFact: string, index: number) => {
      this.currentCatCount += 1;
      this.catFacts.push({catId: this.currentCatCount + index, catFact: catFact});
      this.allCatFacts.push({catId: this.currentCatCount + index, catFact: catFact});
    });
  }

  // sort to sort the catFacts by descending catId
  public orderByDescending() {
   this.catFacts = this.catFacts.sort((a,b) => (a.catId < b.catId) ? 1 : -1);
  }

  // debounce the button to call API
  // create a subscription from RxJS fromEvent
  // use debounceTime to add delay, and subscribe
  public debounceButton() {
    if(this.button){
      this.clickSubscription$ = fromEvent(this.button.nativeElement, 'click').pipe(
        debounceTime(1000),
        tap(() => {
          this.getCatData();
        }),
      ).subscribe();
    }
  }

  // Search
  // bind to changes in the search field
  public subscribeToSearch() {
    this.searchForm.controls['search'].valueChanges.subscribe( changes => {
      this.applySearchFilter(changes);
    });
  }

  // filter the catFacts array to those containing the
  // text in the search field
  public applySearchFilter(searchValue: string) {
    this.catFacts = this.allCatFacts;
    let searchedForCatFacts: CatDataClass[];

    searchedForCatFacts = this.catFacts.filter((catFact) => {
      return catFact.catFact.toString().toLowerCase().indexOf(searchValue.toString().toLowerCase()) > -1;
    });

    this.catFacts = searchedForCatFacts;
  }

}
