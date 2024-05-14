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
    path: 'main',
    loadChildren: () =>
      import('./modules/main-module/main.module').then((mod) => mod.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}