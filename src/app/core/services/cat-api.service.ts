import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiUrl = 'https://meowfacts.herokuapp.com/?count=6';
  public data: any = {};

  constructor(private http: HttpClient) {
  }

  public getCatData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
