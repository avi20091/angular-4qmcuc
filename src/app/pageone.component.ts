import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'one',
  templateUrl: './pageone.component.html'
})
export class PageOneComponent{
  private page_one:string;
  constructor(){
    this.page_one="I am form Page One Component.....!!!!";
  };
}