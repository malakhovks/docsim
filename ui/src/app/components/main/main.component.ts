import { TabEnum } from './../../enums/tab-enum';
import { ApiService, IResultData } from './../../services/api-service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ITermReq, ITermArrReq, ITermCompareReq } from '../../interfaces/httpInterfaces';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public data: Array<IResultData> | any;
  public similarityData: number;
  public terms: string = '';
  public firstTerm: string = '';
  public secondTerm: string = '';
  public selected: string = 'option1';
  public displayedColumns: string[] = ['term', 'vector'];
  private activeTab: TabEnum = TabEnum.Term;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  public async getProcess(): Promise<void> {
    if (this.terms) {
      let reqObj: ITermReq | ITermArrReq;
      const termArr = this.terms.toLocaleLowerCase().split(' ');

      if (termArr?.length) {
        switch (this.activeTab) {
          case(TabEnum.Term):
            reqObj = { word: termArr[0] };
            break;
          case(TabEnum.TermArray):
            reqObj = { words: termArr };
            break;
        }

        const data: IResultData[] = await this.apiService.getProcess(reqObj, this.activeTab);

        this.data = new MatTableDataSource((data as any));
        this.data.sort = this.sort;
      }
    }
  }


  public async getWordsSimilarity(): Promise<void> {
    const reqObj: ITermCompareReq = {
      word_1: this.firstTerm.toLocaleLowerCase(),
      word_2: this.secondTerm.toLocaleLowerCase()
    };

    this.similarityData = await this.apiService.getWordsSimilarity(reqObj);
  }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.data.filter = filterValue.trim().toLowerCase();
  }


  // Use for reset data after active tab changed:
  public onSelectedTabChange(ev: MatTabChangeEvent): void {
    this.activeTab = ev.index;
    this.data = this.similarityData = undefined;
    this.terms = this.firstTerm = this.secondTerm = '';
  }
}