import { ModelData } from './../../../models/Model.data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from './../../../services/event-service';

@Component({
  selector: 'app-semantic-map',
  templateUrl: './semantic-map.component.html',
  styleUrls: ['./semantic-map.component.sass']
})
export class SemanticMapComponent implements OnInit, OnDestroy {
  public model: ModelData;
  private subscription: Subscription[] = [];

  constructor(
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
}
