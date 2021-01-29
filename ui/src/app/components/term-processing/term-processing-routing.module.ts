import { TabEnum } from './../../enums/tab-enum';
import { WordsSimilarityComponent } from './words-similarity/words-similarity.component';
import { TermProcessingComponent } from './term-processing/term-processing.component';
import { SemanticMapComponent } from './semantic-map/semantic-map.component';
import { ROUTS } from '../../shared/const';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabNavigationComponent } from '../tab-nav/tab-nav.component';


export const processingRoutes: Routes = [
  {
    path: '',
    component: TabNavigationComponent,
    children: [
      {
        path: ROUTS.root.lang.processing.term.path,
        pathMatch: 'full',
        component: TermProcessingComponent,
        data:
        {
          type: TabEnum.Term,
        }
      },
      {
        path: ROUTS.root.lang.processing.terms.path,
        pathMatch: 'full',
        component: TermProcessingComponent,
        data:
        {
          type: TabEnum.TermArray,
        }
      },
      {
        path: ROUTS.root.lang.processing.similarity.path,
        pathMatch: 'full',
        component: WordsSimilarityComponent,
      },
      {
        path: ROUTS.root.lang.processing.semanticMap.path,
        pathMatch: 'full',
        component: SemanticMapComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(processingRoutes)],
  exports: [RouterModule]
})
export class TermProcessingRoutingModule { }
