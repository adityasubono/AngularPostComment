import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {UserItemComponent} from "./user-item/user-item.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

@NgModule({
  declarations: [
    UserComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  exports: [
    UserComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
