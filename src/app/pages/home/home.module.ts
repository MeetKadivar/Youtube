import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeServiceService } from './home-service.service';
import { TopBarModule } from '../top-bar/top-bar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopBarModule
  ],
  providers:[HomeServiceService]
})
export class HomeModule { }
