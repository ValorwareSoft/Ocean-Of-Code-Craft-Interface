import { NgModule } from '@angular/core';
import { HeaderCodeComponent } from './header-code/header-code.component';
import { NavbarCodeComponent } from './navbar-code/navbar-code.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'header-getcode',
    component: HeaderCodeComponent,
  },
  {
    path: 'navbar-getcode',
    component: NavbarCodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCodeRoutingModule {}