import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loopback',
  templateUrl: './loopback.component.html',
  styleUrls: ['./loopback.component.css']
})
export class LoopbackComponent {
 
  values = '';

  Onkey(value: string){
    this.values += value + ' | ';
  }

  valuebyenter = '';
  OnEnterkey(Inputvalues: string){
    this.valuebyenter = Inputvalues;
  }

  textvalue = '';
  Update(Blurvalue:string){
    this.textvalue = Blurvalue; 
  }

  arrayvalue = ['Enter values'];
  loopkey(values : string)
  {
     if(values)
     {
       this.arrayvalue.push(values);
     }
  }
}


