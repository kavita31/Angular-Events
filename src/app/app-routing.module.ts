import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickcomponentComponent } from './clickcomponent/clickcomponent.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopbackComponent } from './loopback/loopback.component';
import { HovereventComponent } from './hoverevent/hoverevent.component';

const routes: Routes = [

  {path:"clickcomponent", component: ClickcomponentComponent},
  {path: "keyup", component: KeyupComponent},
  {path: '', redirectTo:'/clickcomponent', pathMatch:'full'},
  {path:'loopback', component: LoopbackComponent},
  {path:'hoverevent' , component: HovereventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
