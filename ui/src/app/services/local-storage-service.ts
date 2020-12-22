import { ModelData } from './../models/Model.data';
import { TermCompareRespData } from './../models/TermCompareResp.data';
import { TermArrRespData } from './../models/TermArrResp.data';
import { TermRespData } from './../models/TermResp.data';
import { TabEnum } from './../enums/tab-enum';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITermReq, ITermArrReq, ITermCompareReq } from './../interfaces/httpInterfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
