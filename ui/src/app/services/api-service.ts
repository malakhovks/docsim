import { ModelData } from './../models/Model.data';
import { TermCompareRespData } from './../models/TermCompareResp.data';
import { TermArrRespData } from './../models/TermArrResp.data';
import { TermRespData } from './../models/TermResp.data';
import { TabEnum } from './../enums/tab-enum';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITermReq, ITermArrReq, ITermCompareReq } from './../interfaces/httpInterfaces';


export interface IResultData {
  term: string;
  vector: number;
}

interface IModelDataResponse {
  models: {
    word2vec: ModelData[];
  };
}


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  public async getModels(): Promise<Array<ModelData | null>> {
    return this.http.get('/models').toPromise().then((resp: IModelDataResponse) => {
      if (resp?.models?.word2vec?.length) {
        return resp.models.word2vec;
      }

      return null;
    });
  }

  public async getWordsSimilarity(obj: ITermCompareReq, modelTypeIndex: number): Promise<number> {
    const params = new HttpParams().set('model', modelTypeIndex.toString());

    return this.http.post('/word2vec/similarity', obj, { params }).toPromise()
      .then((resp: TermCompareRespData) => resp?.similarity ? resp.similarity : null);
  }

  public async getProcess(obj: ITermReq | ITermArrReq, activeTabIndex: TabEnum, modelTypeIndex: number): Promise<Array<IResultData>> {
    const url: string = this.getProcessRequestByActiveTabIndex(activeTabIndex);
    const params = new HttpParams().set('model', modelTypeIndex.toString());

    return this.http.post(url, obj, { params }).toPromise()
      .then((resp: TermRespData | TermArrRespData) => this.parseProcessResp(activeTabIndex, resp));
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
