import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadPageComponent } from './lead-page/lead-page.component';
import { router } from './lead.routing';
 @NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [LeadPageComponent]
})
export class LeadModule { }
