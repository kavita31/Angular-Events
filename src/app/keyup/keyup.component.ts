import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent  {

  value = '';
  Keyup(event : any){
    this.value = event.target.value;  //without type info
  }

  DynamicText = '';
   Dynamicvalues(event : any)
   {
        this.DynamicText += event.target.value + ' | ';  //with Concatenate string
   }

   Input = '';
   InputText(event : KeyboardEvent)
   {
      this.Input += (<HTMLInputElement>event.target).value + ' | '; //with type info
   }
 
}
