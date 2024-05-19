import { NgModule } from '@angular/core';
import { HeaderCodeComponent } from './header-code/header-code.component';
import { NavbarCodeComponent } from './navbar-code/navbar-code.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderCodeComponent,
  },
  {
    path: 'navbar',
    component: NavbarCodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCodeRoutingModule {}