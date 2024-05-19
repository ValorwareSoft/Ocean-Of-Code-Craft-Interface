import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/navbar-module/navbar.module').then(
        (mod) => mod.NavbarModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./modules/pages-module/pages.module').then((mod) => mod.PagesModule),
  },
  {
    path : 'popup',
    loadChildren: () =>
      import('./modules/common-popup/common-popup.module').then((mod) => mod.CommonPopupModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}