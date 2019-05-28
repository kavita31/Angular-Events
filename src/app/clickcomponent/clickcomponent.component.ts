import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickcomponent',
  templateUrl: './clickcomponent.component.html',
  styleUrls: ['./clickcomponent.component.css']
})
export class ClickcomponentComponent  {
 
  value : string ='';
  Onclick()
  {
    this.value = "You clicked me !!";
  }
  
}
