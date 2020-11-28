import { ModelData } from './../models/Model.data';
import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  public onWord2VecModelChange: BehaviorSubject<ModelData> = new BehaviorSubject<ModelData>(null);
}
