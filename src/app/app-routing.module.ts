import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './shared/components/layouts/basic-layout/basic-layout.component';
import { authenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:BasicLayoutComponent,
    // canActivate: [authenticationGuard],
    // loadChildren: ()=> import('./shared/components/layouts/basic-layout')

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
