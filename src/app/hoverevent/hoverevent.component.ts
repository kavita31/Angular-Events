import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoverevent',
  templateUrl: './hoverevent.component.html',
  styleUrls: ['./hoverevent.component.css']
})
export class HovereventComponent  {
changetext : boolean;

mouseenter : boolean;
 
changecolor: boolean;

constructor(){
  this.changetext = false;
  this.mouseenter = false;
  this.changecolor = false;
}
}
