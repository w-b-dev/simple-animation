import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: './routes/about.module#AboutModule',
  },
  {
    path: 'home',
    loadChildren: './routes/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: './routes/login.module#LoginModule',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
