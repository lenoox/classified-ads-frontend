import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSiteRoutingModule } from './user-site-routing.module';
import {HomeComponent} from "./pages/home/home.component";
import { ItemDetailsComponent } from './pages/item-details/item-details.component';


@NgModule({
  declarations: [HomeComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    UserSiteRoutingModule
  ]
})
export class UserSiteModule { }
