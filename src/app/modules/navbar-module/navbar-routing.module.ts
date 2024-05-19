import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './navbar-links/about-us/about-us.component';
import { HomeComponent } from './navbar-links/home/home.component';
import { ContactUsComponent } from './navbar-links/contact-us/contact-us.component';
import { GetCustomCodeComponent } from './navbar-links/get-custom-code/get-custom-code.component';
import { SignUpComponent } from './navbar-links/sign-up/sign-up.component';
import { LoginComponent } from './navbar-links/login/login.component';
import { ProfileComponent } from './navbar-links/profile/profile.component';
import { ChangePasswordComponent } from './navbar-links/change-password/change-password.component';
import { ServicesComponent } from './navbar-links/services/services.component';
import { NavbarCodeComponent } from '../main-module/get-code/navbar-code/navbar-code.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'get-custom-code',
        component: GetCustomCodeComponent,
      },
      // {
      //   path: 'sign-up',
      //   component: SignUpComponent,
      // },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'services',
        component: ServicesComponent
      }, 
      {
        path: 'get-code',
        loadChildren: () =>
          import('../main-module/get-code/get-code.module').then((mod) => mod.GetCodeModule),
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('../main-module/preview/preview.module').then((mod) => mod.PreviewModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule { }
