import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/general/home/home.component";
import {NotFoundComponent} from "./modules/general/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'contact',
  loadChildren: () => import('./modules/general/contact/contact.module')
    .then(mod => mod.ContactModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },

  {
    path: 'dashboard/:id',
    loadChildren: () => import('./modules/general/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
