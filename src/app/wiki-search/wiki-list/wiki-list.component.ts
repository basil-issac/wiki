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
  results: any[]

  constructor(private http: HttpClient, private wikiService: WikiService, private renderer: Renderer2) { 
    this.userInput = '';
  }

  ngOnInit() {
  }

  search() {
    this.wikiService.search(this.userInput).subscribe(
      (wikiResults: any[]) => {
        this.results = wikiResults['query']['search'];
      }
    );
  }



}
