import { NgModule } from '@angular/core';
import { GilLibComponent } from './gil-lib.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    GilLibComponent
  ],
  providers: [AuthService],
  imports: [
  ],
  exports: [
    GilLibComponent
  ]
})
export class GilLibModule { }
