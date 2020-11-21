import { TabEnum } from './../../../enums/tab-enum';
import { ApiService, IResultData } from './../../../services/api-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITermReq, ITermArrReq } from './../../../interfaces/httpInterfaces';
import { ActivatedRoute } from '@angular/router';

const ROUTE_TYPE_DATA_FIELD = 'type';

// TODO: fix cols sorting;

@Component({
  selector: 'app-term-processing',
  templateUrl: './term-processing.component.html',
  styleUrls: ['./term-processing.component.sass'],
})
export class TermProcessingComponent implements OnInit {
  public terms = '';
  public data: Array<IResultData> | any;
  public displayedColumns: string[] = ['term', 'vector'];
  public activeTab: TabEnum = TabEnum.Term;

  @ViewChild(MatSort) private sort: MatSort;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeTab = this.route.snapshot.data[ROUTE_TYPE_DATA_FIELD];
  }

  public async getProcess(): Promise<void> {
    if (this.terms && this.activeTab !== undefined) {
      const termArr = this.terms.toLocaleLowerCase().split(' ');  // array of words which splited by whitespace;

      if (termArr?.length) {
        const reqObj: ITermReq | ITermArrReq = this.activeTab === TabEnum.Term ? { word: termArr[0] } : { words: termArr };
        const data: IResultData[] = await this.apiService.getProcess(reqObj, this.activeTab);

        this.data = new MatTableDataSource((data as any));
        this.data.sort = this.sort;
      }
    }
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.data.filter = filterValue.trim().toLowerCase();
  }
}
