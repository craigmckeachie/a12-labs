import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
