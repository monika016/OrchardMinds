import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrchardDataService } from './orchard-data.service';
import { AppComponent } from './app.component';
import { router } from './app.routing';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    router
  ],
  providers: [OrchardDataService, AuthGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
