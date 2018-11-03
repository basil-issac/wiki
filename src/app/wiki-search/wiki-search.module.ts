import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiService } from './wiki.service';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HistoryComponent } from './history/history.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WikiService],
  declarations: [WikiListComponent, HistoryComponent],
  exports: [WikiListComponent, HistoryComponent]
})
export class WikiSearchModule { }
