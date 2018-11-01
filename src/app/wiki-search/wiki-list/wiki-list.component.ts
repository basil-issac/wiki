import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.css']
})
export class WikiListComponent implements OnInit {

  userInput: string;
  wikiResults: any[];
  giphyResults: any[];

  constructor(private http: HttpClient, private wikiService: WikiService, private renderer: Renderer2) { 
    this.userInput = '';
  }

  ngOnInit() {
  }

  search() {
    this.wikiService.searchWiki(this.userInput).subscribe(
      (wikiResults: any[]) => {
        this.wikiResults = wikiResults['query']['search'];
      }
    );

    this.wikiService.searchGiphy(this.userInput).subscribe(
      (giphyResults: any[]) => {
        this.giphyResults = giphyResults['data'];
      }
    );
  }



}
