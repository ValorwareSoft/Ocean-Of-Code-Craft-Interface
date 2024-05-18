import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pop-up/pop-up.component';


const routes: Routes = [
  {
    path: '#/:result', component: ContactUsComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPopupRoutingModule { }
