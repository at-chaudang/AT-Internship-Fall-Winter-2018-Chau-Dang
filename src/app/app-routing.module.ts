import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './pages/forms/forms.component';
import { TemplateDrivenComponent } from './pages/forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './pages/forms/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
