import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TienditaComponent } from './tiendita.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { BodyWebComponent } from '../body-web/body-web.component';



@NgModule({
  declarations: [
    TienditaComponent,
    MenuNavComponent,
    BodyWebComponent
  ],
  exports: [
    TienditaComponent,
    MenuNavComponent,
    BodyWebComponent
  ],
  imports:[
    CommonModule
  ]
  
})
export class tiendita { }
