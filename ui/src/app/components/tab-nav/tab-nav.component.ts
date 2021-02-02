import { langSubject } from './../lang-menu/lang-menu.component';
import { LocalStorageService } from './../../services/local-storage-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

const MODEL_QUERY_PARAM = 'model';

@Component({
  selector: 'app-tab-nav',
  templateUrl: 'tab-nav.component.html',
  styleUrls: ['tab-nav.component.sass'],
})
export class TabNavigationComponent implements OnInit {
  public activeModelIndex: number;
  public vectorModels: ModelData[] = [];
  public bookArr: Array<any> = new Array(120);

  constructor(
    public apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private localStorageService: LocalStorageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe((params: Params) => {
      if (this.activeModelIndex === undefined) {
        this.activeModelIndex = params[MODEL_QUERY_PARAM];  // try to get active model index by URL query params;
  
        if (this.activeModelIndex === undefined) {
          this.activeModelIndex = Number(this.localStorageService.getItem(MODEL_QUERY_PARAM));  // try to get active model index from local storage;
  
          if (this.activeModelIndex === null) {
            this.activeModelIndex = 0;  // set active model index by default;
          }
        }
  
        this.apiService.getModels().then((resp: Array<ModelData>) => {
          if (resp) {
            this.vectorModels = resp;
            this.onModelChange(this.vectorModels[this.activeModelIndex]);
          }
        });
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

  public isLinkActive(url: string): boolean {
    return [this.route.snapshot.firstChild.routeConfig.path][0] === url[0];
  }

  private onModelChange(model: ModelData): void {

    // Add active model to local storage:
    this.localStorageService.setItem(MODEL_QUERY_PARAM, model.index.toString());

    // Set query params with active model index:
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { model: model.index },
      queryParamsHandling: 'merge'
    });

    this.activeModelIndex = model.index;
    this.eventService.onWord2VecModelChange.next(model);
  }

  public navLinks: Array<ITabNavLink> = [
      {
          label: $localize`Семантичні асоціати`,
          title: 'Обчислення семантичних асоціатів для однослівних термінів',
          path: [ROUTS.root.lang.processing.terms.path],
      }, {
          label: $localize`Центр лексичного кластера`,
          title: 'Обчислення центру лексичного кластера однослівних термінів',
          path: [ROUTS.root.lang.processing.term.path],
      }, {
          label: $localize`Семантична близькість`,
          title: 'Обчислення семантичної близькісті однослівних термінів',
          path: [ROUTS.root.lang.processing.similarity.path],
      }, {
          label: $localize`Семантична карта`,
          title: 'Семантична карта з використанням TensorFlow Projector',
          path: [ROUTS.root.lang.processing.semanticMap.path],
      }
    ];
}
