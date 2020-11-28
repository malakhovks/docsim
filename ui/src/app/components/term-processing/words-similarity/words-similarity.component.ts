import { ModelData } from './../../../models/Model.data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api-service';
import { ITermCompareReq } from '../../../interfaces/httpInterfaces';
import { Subscription } from 'rxjs';
import { EventService } from './../../../services/event-service';



@Component({
  selector: 'app-words-similarity',
  templateUrl: './words-similarity.component.html',
  styleUrls: ['./words-similarity.component.sass'],
})
export class WordsSimilarityComponent implements OnInit, OnDestroy {
  public similarityData: number;
  public firstTerm = '';
  public secondTerm = '';
  public model: ModelData;
  private subscription: Subscription[] = [];


  constructor(
    private apiService: ApiService,
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    if (this.eventService.onWord2VecModelChange.value) {
      this.model = this.eventService.onWord2VecModelChange.value;
    }

    this.subscription.push(this.eventService.onWord2VecModelChange.subscribe((model: ModelData) => {
      if (model) {
        this.model = model;
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

  public async getWordsSimilarity(): Promise<void> {
    if (this.model) {
      const reqObj: ITermCompareReq = {
        word_1: this.firstTerm.toLocaleLowerCase(),
        word_2: this.secondTerm.toLocaleLowerCase()
      };

      this.similarityData = await this.apiService.getWordsSimilarity(reqObj, this.model.index);
    }
  }
}
