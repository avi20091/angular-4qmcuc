import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'three',
  templateUrl: './pagethree.component.html'
})
export class PageThreeComponent{
  private page_three:string;
  constructor(){
    this.page_three="I am form Page Three Component.....!!!!";
  };
}