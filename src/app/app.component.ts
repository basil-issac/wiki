import { Component } from '@angular/core';
import { WikiListComponent } from './wiki-search/wiki-list/wiki-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiki-Giphy';
  constructor() {}
}
