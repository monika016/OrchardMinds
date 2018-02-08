import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapabilityPageComponent } from './capability-page/capability-page.component';
import { CapabilityCardComponent } from './capability-card/capability-card.component';
import { router } from './capabilities.routing';

@NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [CapabilityPageComponent, CapabilityCardComponent]
})
export class CapabilitiesModule { }
