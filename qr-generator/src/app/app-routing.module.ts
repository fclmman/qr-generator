import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    loadChildren: () =>
      import('./qr/qr.module').then(
        (m) => m.QrModule
      )
  }, {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then(
        (m) => m.AboutModule
      )
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
