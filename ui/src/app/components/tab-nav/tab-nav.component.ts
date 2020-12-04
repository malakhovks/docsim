import { EventService } from './../../services/event-service';
import { ApiService } from './../../services/api-service';
import { ModelData } from './../../models/Model.data';
import { ITabNavLink } from './../../interfaces/ITabNavLink';
import { Component, OnInit } from '@angular/core';
import { ROUTS } from './../../shared/const';
import { MatSelectChange } from '@angular/material/select';

export class VectorModel {
  index: number;
  name: string;
  description: string;
  link: string;
  language: string;
}


@Component({
  selector: 'app-tab-nav',
  templateUrl: 'tab-nav.component.html',
  styleUrls: ['tab-nav.component.sass'],
})
export class TabNavigationComponent implements OnInit {
  public vectorModels: ModelData[] = [];
  public navLinks: Array<ITabNavLink> = [
    {
        label: 'Семантичні асоціати',
        title: 'Обчислення семантичних асоціатів для однослівних термінів',
        link: ROUTS.root.processing.terms.path,
        index: 0
    }, {
        label: 'Центр лексичного кластера',
        title: 'Обчислення центру лексичного кластера однослівних термінів',
        link: ROUTS.root.processing.term.path,
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

  constructor(
    public apiService: ApiService,
    private eventService: EventService
  ) {}

  async ngOnInit(): Promise<void> {
    this.apiService.getModels().then((resp: Array<ModelData>) => {
      if (resp) {
        this.vectorModels = resp;
        this.onModelChange(this.vectorModels[0]);
      }
    });
  }

  public onModelSelectionChange($ev: MatSelectChange): void {
    if ($ev?.value !== undefined) {
      const model: ModelData = this.vectorModels.find((m: ModelData) => m.index === $ev.value);

      if (model) {
        this.onModelChange(model);
      }
    }
  }

  private onModelChange(model: ModelData): void {
    this.eventService.onWord2VecModelChange.next(model);
  }
}
