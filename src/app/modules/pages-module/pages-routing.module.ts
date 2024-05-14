import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternetDisconnectComponent } from './internet-disconnect/internet-disconnect.component';

const routes: Routes = [
  {path : 'reset-password' , component : ResetPasswordComponent},
  {path : 'access-denied' , component : AccessDeniedComponent},
  {path : '404-page-not-found' , component: PageNotFoundComponent},
  {path : 'internet-disconnected' , component: InternetDisconnectComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
