import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './base/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  },
  // Private routes
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'pokedex',
        loadChildren: () =>
          import('./pokedex/pokedex.module').then((pokedex) => pokedex.PokedexModule),
          title: "PokeDex"
      },
      {
        path: '**',
        redirectTo: 'pokedex',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
