import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
  }

  search(userInput: string) {
    var requestUrl = `${this.url}${userInput}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

}
