import { Routes } from '@angular/router';
import { TodosPageComponent } from './components/todos-page/todos-page.component';

export const routes: Routes = [
  { path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'todos/:status', component: TodosPageComponent },
  { path: '**', redirectTo: '/todos/all', pathMatch: 'full' },
];
