import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSiteRoutingModule } from './user-site-routing.module';
import {HomeComponent} from "./pages/home/home.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserSiteRoutingModule
  ]
})
export class UserSiteModule { }
