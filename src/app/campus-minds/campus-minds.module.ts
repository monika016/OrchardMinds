import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusMindsPageComponent } from './campus-minds-page/campus-minds-page.component';
import { CampusMindCardComponent } from './campus-mind-card/campus-mind-card.component';
import { router } from './campus-minds.routing';



@NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [CampusMindsPageComponent, CampusMindCardComponent],
  exports: [CampusMindsPageComponent]
})
export class CampusMindsModule { }
