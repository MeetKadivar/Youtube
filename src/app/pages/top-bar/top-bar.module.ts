import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TopBarRoutingModule } from './top-bar-routing.module';
import { TopBarComponent } from './top-bar.component';
import { TopBarService } from './top-bar.service';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    TopBarRoutingModule,
    MatButtonModule
  ],
  providers:[TopBarService],
  exports:[TopBarComponent]
})
export class TopBarModule { }
