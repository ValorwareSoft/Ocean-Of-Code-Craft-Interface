import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';


const routes: Routes = [
  {
    path: '#/:result', component: PopUpComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPopupRoutingModule { }
