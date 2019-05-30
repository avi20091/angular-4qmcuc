import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'two',
  templateUrl: './pagetwo.component.html'
})
export class PageTwoComponent{
  private page_two:string;
  constructor(){
    this.page_two="I am form Page Two Component.....!!!!";
  };
}