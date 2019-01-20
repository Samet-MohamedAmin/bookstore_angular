import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
    FooterComponent
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
