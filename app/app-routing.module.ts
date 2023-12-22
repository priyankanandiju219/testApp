import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardServiceService } from './auth-guard-service.service';



@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
