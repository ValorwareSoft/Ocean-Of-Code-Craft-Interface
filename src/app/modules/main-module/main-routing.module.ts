import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'preview',
    loadChildren: () =>
      import('./preview/preview.module').then((mod) => mod.PreviewModule),
  },
  {
    path: 'get-code',
    loadChildren: () =>
      import('./get-code/get-code.module').then((mod) => mod.GetCodeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}