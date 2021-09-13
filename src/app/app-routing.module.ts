import { NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouttComponent } from './aboutt/aboutt.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutt',component:AbouttComponent},
  {path:'output',component:OutputComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[HomeComponent,ServiceComponent,ContactComponent,AbouttComponent,OutputComponent]
