import { ModelData } from './../../../models/Model.data';
import { EventService } from './../../../services/event-service';
import { TabEnum } from './../../../enums/tab-enum';
import { ApiService, IResultData } from './../../../services/api-service';
import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITermReq, ITermArrReq } from './../../../interfaces/httpInterfaces';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


const ROUTE_TYPE_DATA_FIELD = 'type';

@Component({
  selector: 'app-term-processing',
  templateUrl: './term-processing.component.html',
  styleUrls: ['./term-processing.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermProcessingComponent implements OnInit, OnDestroy {
  public terms = '';
  public model: ModelData;
  public data: MatTableDataSource<IResultData>;
  public displayedColumns: string[] = ['term', 'vector'];
  public activeTab: TabEnum = TabEnum.Term;
  private subscription: Subscription[] = [];

  @ViewChild(MatSort) private sort: MatSort;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private eventService: EventService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activeTab = this.route.snapshot.data[ROUTE_TYPE_DATA_FIELD];

    if (this.eventService.onWord2VecModelChange.value) {
      this.model = this.eventService.onWord2VecModelChange.value;
    }

    this.subscription.push(this.eventService.onWord2VecModelChange.subscribe((model: ModelData) => {
      if (model) {
        this.model = model;
        this.cd.markForCheck();

        if (this.data !== undefined) {
          this.getProcess();
        }
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription?.length) {
      this.subscription.forEach((s => {
        s.unsubscribe();
        s = undefined;
      }));
    }
  }

  public async getProcess(): Promise<void> {
    if (this.terms && this.activeTab !== undefined) {
      const termArr = this.terms.toLocaleLowerCase().split(' ');  // array of words which splited by whitespace;

      if (termArr?.length && this.model) {
        const reqObj: ITermReq | ITermArrReq = this.activeTab === TabEnum.TermArray ? { word: termArr[0] } : { words: termArr };
        const data: IResultData[] = await this.apiService.getProcess(reqObj, this.activeTab, this.model.index);

        if (data?.length) {
          this.data = new MatTableDataSource(this.addSortIndexOfTerm(data));
          this.setCustomSort();

          // detect changes and apply sort settings:
          this.cd.detectChanges();
          this.data.sort = this.sort;
        }
      }
    }
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.data.filter = filterValue.trim().toLowerCase();
  }

  private setCustomSort(): void {
    this.data.sortingDataAccessor = (item, property) => {
      switch (property) {
        case this.displayedColumns[0]: return item.termIndex ? item.termIndex : item.term;
        default: return item[property];
      }
    };
  }

  // Sort terms by local compare and create sorting index:
  private addSortIndexOfTerm(arr: Array<IResultData>): Array<IResultData> {
    arr.sort((s1, s2) => s1.term.localeCompare(s2.term));
    arr.forEach((arrItem: IResultData, index: number) => arrItem.termIndex = index + 1);

    return arr;
  }
}
