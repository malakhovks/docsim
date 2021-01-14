import { UtilsService } from './../../services/utils-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent {
  public showLinks: boolean;
  public currentURL: string = this.utilsService.getCurrentURL();

  constructor(
    private utilsService: UtilsService
  ) {}


  public copyLink(): void {
    navigator.clipboard.writeText(this.utilsService.getCurrentURL());
    this.showLinks = false;
  }
}
