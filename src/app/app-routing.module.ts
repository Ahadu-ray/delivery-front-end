import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature-modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./feature-modules/features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
