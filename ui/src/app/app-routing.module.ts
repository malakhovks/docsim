import { AboutDevelopersComponent } from './components/about-developers/about-developers.component';
import { TabNavigationComponent } from './components/tab-nav/tab-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTS } from './shared/const';
import { AboutSourcesComponent } from './components/about-sources/about-sources.component';
import { AboutProcessingComponent } from './components/term-processing/about-processing/about-processing.component';

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
  {
    path: ROUTS.root.aboutProject.developers.path,
    pathMatch: 'full',
    component: AboutDevelopersComponent,
  },
  {
    path: ROUTS.root.aboutProject.sources.path,
    pathMatch: 'full',
    component: AboutSourcesComponent,
  },
  {
    path: ROUTS.root.aboutProject.aboutProject.path,
    pathMatch: 'full',
    component: AboutProcessingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
