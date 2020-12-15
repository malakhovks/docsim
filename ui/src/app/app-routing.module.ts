// import { AboutComponent } from './components/about/about.component';
import { TabNavigationComponent } from './components/tab-nav/tab-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTS } from './shared/const';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTS.root.processing.path + '/' + ROUTS.root.processing.terms.path
  },
  {
    path: ROUTS.root.processing.path,
    component: TabNavigationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/term-processing/term-processing-routing.module').then(m => m.TermProcessingRoutingModule)
      },
    ]
  },
 /*  { path: ROUTS.root.about.path, component: AboutComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
