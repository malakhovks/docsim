import { TermCompareRespData } from './../models/TermCompareResp.data';
import { TermArrRespData } from './../models/TermArrResp.data';
import { TermRespData } from './../models/TermResp.data';
import { TabEnum } from './../enums/tab-enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITermReq, ITermArrReq, ITermCompareReq } from './../interfaces/httpInterfaces';


export interface IResultData {
  term: string;
  vector: number;
}


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}


  public async getWordsSimilarity(obj: ITermCompareReq): Promise<number> {
    return this.http.post('/word2vec/similarity', obj).toPromise().then((resp: TermCompareRespData) => resp?.similarity ? resp.similarity : null);
  }

  public async getProcess(obj: ITermReq | ITermArrReq, activeTabIndex: TabEnum): Promise<Array<IResultData>> {
    const url: string = this.getProcessRequestByActiveTabIndex(activeTabIndex);

    return this.http.post(url, obj).toPromise().then((resp: TermRespData | TermArrRespData) => this.parseProcessResp(activeTabIndex, resp));
  }


  private parseProcessResp(activeTabIndex: TabEnum, resp: TermRespData | TermArrRespData): Array<IResultData> {
    const result: Array<IResultData> = [];

    switch (activeTabIndex) {
      case(TabEnum.Term):
        if ((resp as TermRespData)?.similar?.length) {
          (resp as TermRespData).similar.forEach((el: [string, number]) => result.push({ term: el[0], vector: el[1] }));
        }
        break;
      case(TabEnum.TermArray):
        if ((resp as TermArrRespData)?.center?.length) {
          (resp as TermArrRespData).center.forEach((el: [string, number]) => result.push({ term: el[0], vector: el[1] }));
        }
        break;
    }

    return result;
  }


  private getProcessRequestByActiveTabIndex(activeTabIndex: TabEnum): string {
    switch (activeTabIndex) {
      case(TabEnum.Term):
        return '/word2vec/similar';
      case(TabEnum.TermArray):
        return '/word2vec/center';
    }
  }
}
