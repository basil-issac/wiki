import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  searches: string[];

  constructor(private wikiService: WikiService) {
    this.searches = wikiService.searches;
  }

  ngOnInit() {
  }

  
}
