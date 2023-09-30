import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideBarComponent } from './side-bar.component';
import { SideBarService } from './side-bar.service';


@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SideBarRoutingModule
  ],
  providers:[SideBarService]
})
export class SideBarModule { }
