import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public getCurrentYear = (): number => new Date().getFullYear();

  public getCurrentURL = (): string => location.href;
}
