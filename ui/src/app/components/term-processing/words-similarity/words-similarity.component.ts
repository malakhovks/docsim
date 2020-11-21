import { Component } from '@angular/core';
import { ApiService } from '../../../services/api-service';
import { ITermCompareReq } from '../../../interfaces/httpInterfaces';


@Component({
  selector: 'app-words-similarity',
  templateUrl: './words-similarity.component.html',
  styleUrls: ['./words-similarity.component.sass'],
})
export class WordsSimilarityComponent {
  public similarityData: number;
  public firstTerm = '';
  public secondTerm = '';

  constructor(
    private apiService: ApiService,
  ) {}

  public async getWordsSimilarity(): Promise<void> {
    const reqObj: ITermCompareReq = {
      word_1: this.firstTerm.toLocaleLowerCase(),
      word_2: this.secondTerm.toLocaleLowerCase()
    };

    this.similarityData = await this.apiService.getWordsSimilarity(reqObj);
  }
}
