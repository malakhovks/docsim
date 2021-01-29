
import { AboutDevelopersComponent } from './components/about-developers/about-developers.component';
import { TabNavigationComponent } from './components/tab-nav/tab-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTS } from './shared/const';
import { AboutSourcesComponent } from './components/about-sources/about-sources.component';
import { AboutProcessingComponent } from './components/term-processing/about-processing/about-processing.component';

export const langList: string[] = ['ua', 'en']

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${langList[0]}/${ROUTS.root.lang.processing.path}/${ROUTS.root.lang.processing.terms.path}`  // default redirect
  },
  {
    path: ':lang',
    children: [
      {
        path: ROUTS.root.lang.aboutProject.developers.path,
        pathMatch: 'full',
        component: AboutDevelopersComponent,
      },
      {
        path: ROUTS.root.lang.aboutProject.sources.path,
        pathMatch: 'full',
        component: AboutSourcesComponent,
      },
      {
        path: ROUTS.root.lang.aboutProject.aboutProject.path,
        pathMatch: 'full',
        component: AboutProcessingComponent,
      },
      {
        path: ROUTS.root.lang.processing.path,
        loadChildren: () => import('./components/term-processing/term-processing-routing.module').then(m => m.TermProcessingRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
