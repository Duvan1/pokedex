import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { ToastrModule } from 'ngx-toastr';

export const toasterModule = ToastrModule.forRoot();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    toasterModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [PokeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
