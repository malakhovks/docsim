import { TabEnum } from './../../enums/tab-enum';
import { WordsSimilarityComponent } from './words-similarity/words-similarity.component';
import { TermProcessingComponent } from './term-processing/term-processing.component';
import { AboutProcessingComponent } from './about-processing/about-processing.component';
import { SemanticMapComponent } from './semantic-map/semantic-map.component';
import { ROUTS } from '../../shared/const';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ROUTS.root.processing.term.path,
        pathMatch: 'full',
        component: TermProcessingComponent,
        data:
        {
          type: TabEnum.Term,
        }
      },
      {
        path: ROUTS.root.processing.terms.path,
        pathMatch: 'full',
        component: TermProcessingComponent,
        data:
        {
          type: TabEnum.TermArray,
        }
      },
      {
        path: ROUTS.root.processing.similarity.path,
        pathMatch: 'full',
        component: WordsSimilarityComponent,
      },
      {
        path: ROUTS.root.processing.semanticMap.path,
        pathMatch: 'full',
        component: SemanticMapComponent,
      },
      {
        path: ROUTS.root.processing.aboutProject.path,
        pathMatch: 'full',
        component: AboutProcessingComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermProcessingRoutingModule { }
