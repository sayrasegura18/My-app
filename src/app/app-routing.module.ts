import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TienditaComponent } from './tiendita/tiendita.component';


const routes: Routes = [
  {
    path:"", component: TienditaComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
