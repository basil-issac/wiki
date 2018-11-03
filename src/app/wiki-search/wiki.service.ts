import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private wikiUrl: string;
  private giphyUrl: string;
  searches: string[];

  constructor(private http: HttpClient) {
    this.searches = [];
    this.wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
    this.giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=D2p6xgjFpoK1WECDP7nQPm13GvFNzIDO&limit=5&offset=0&rating=G&lang=en&q=`;
  }

  searchWiki(userInput: string) {
    this.searches.push(new Date() + " --- " + userInput);
    var requestUrl = `${this.wikiUrl}${userInput}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

  searchGiphy(userInput: string) {
    var requestUrl = `${this.giphyUrl}${userInput}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

}
