import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './pages/forms/forms.component';
import { TemplateDrivenComponent } from './pages/forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './pages/forms/reactive-form/reactive-form.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './pages/user/user.guard';
import { ProfileResolver } from './pages/user/profile/profile.resolve';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: 'template',
        component: TemplateDrivenComponent
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent
      }
    ]
  },
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule',
    component: UserComponent,
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
    canDeactivate: [UserGuard],
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'profile',
    //     component: ProfileComponent,
    //     resolve: [ProfileResolver]
    //   }
    // ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
