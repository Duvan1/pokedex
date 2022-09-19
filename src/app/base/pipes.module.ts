import { NgModule } from '@angular/core';
import { PokeIdPipe } from '../../lib/pipes/pokeid.pipe';

const pipes = [PokeIdPipe];

@NgModule({
  declarations: pipes,
  imports: [],
  exports: pipes,
})
export class PipesModule {}
