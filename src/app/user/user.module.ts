import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from "./user.service";

const routes : Routes = [
   { path: '',component: UserComponent}
]

@NgModule({
  declarations: [UserComponent, AdduserComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),NgbModule,FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
