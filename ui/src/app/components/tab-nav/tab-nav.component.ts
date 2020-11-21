import { ITabNavLink } from './../../interfaces/ITabNavLink';
import { Component } from '@angular/core';
import { ROUTS } from './../../shared/const';

interface IVectorModel {
  value: string;
  viewValue: string;
  disabled?: boolean;
}


@Component({
  selector: 'app-tab-nav',
  templateUrl: 'tab-nav.component.html',
  styleUrls: ['tab-nav.component.sass'],
})
export class TabNavigationComponent {
  public vectorModels: IVectorModel[] = [
    {
      value: 'vec-0',
      viewValue: 'honchar.lowercased.lemmatized.word2vec.FINAL.500d',
    },
    {
      value: 'vec-1',
      viewValue: 'fiction.lowercased.lemmatized.word2vec.300d',
      disabled: true
    }
  ];

  public selectedVectorModel: string = this.vectorModels[0].value;
  public navLinks: Array<ITabNavLink> = [
    {
        label: 'Семантичні асоціати',
        title: 'Обчислення семантичних асоціатів для однослівних термінів',
        link: ROUTS.root.processing.term.path,
        index: 0
    }, {
        label: 'Центр лексичного кластера',
        title: 'Обчислення центру лексичного кластера однослівних термінів',
        link: ROUTS.root.processing.terms.path,
        index: 1
    }, {
        label: 'Семантична близькість',
        title: 'Обчислення семантичної близькісті однослівних термінів',
        link: ROUTS.root.processing.similarity.path,
        index: 2
    }, {
        label: 'Семантична карта',
        title: 'Семантична карта з використанням TensorFlow Projector',
        link: ROUTS.root.processing.semanticMap.path,
        index: 3
    }, {
        label: 'Про проєкт',
        title: 'Відомості про проєкт',
        link: ROUTS.root.processing.aboutProject.path,
        index: 4
    }
  ];

  constructor() {}
}
