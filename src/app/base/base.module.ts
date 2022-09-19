import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PkmButtonComponent } from './pkm-button/pkm-button.component';
import { PkmFavButtonComponent } from './pkm-fav-button/pkm-fav-button.component';
import { PkmTopBarComponent } from './pkm-top-bar/pkm-top-bar.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PipesModule } from './pipes.module';

@NgModule({
  declarations: [
    WrapperComponent,
    PkmButtonComponent,
    PkmFavButtonComponent,
    PkmTopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule,
    RouterModule,
    NgHttpLoaderModule.forRoot(),
  ],
  exports: [
    WrapperComponent,
    PkmButtonComponent,
    PkmFavButtonComponent,
    PkmTopBarComponent,
    PipesModule,
  ],
})
export class BaseModule {}
