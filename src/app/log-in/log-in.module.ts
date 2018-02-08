import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { OrchardDataService } from '../orchard-data.service';
import { router } from './log-in.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogInMsgComponent } from './log-in-msg/log-in-msg.component';

@NgModule({
  imports: [
    CommonModule,
    router,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LogInPageComponent, LogInMsgComponent],
  providers: []
})
export class LogInModule { }
