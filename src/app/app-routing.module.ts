import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSiteModule} from "./user-site/user-site.module";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserSiteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
