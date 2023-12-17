import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //path racine
  {
    path: 'tab1',
    loadChildren: () =>
      import('./tab1/tab1.module').then((m) => m.Tab1PageModule),
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full',
  },
  {
    path: 'tab2/:id',
    loadChildren: () =>
      import('./tab2/tab2.module').then(
        (m) => m.Tab2PageModule
      ),
  },
  {
    path: 'tab3',
    loadChildren: () =>
      import('./tab3/tab3.module').then(
        (m) => m.Tab3PageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}