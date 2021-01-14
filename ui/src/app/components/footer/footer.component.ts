import { ROUTS } from './../../shared/const';
import { UtilsService } from './../../services/utils-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  public currentYear: number = this.utilsService.getCurrentYear();
  public currentURL: string = this.utilsService.getCurrentURL();

  public aboutProjectLink: string = ROUTS.root.aboutProject.aboutProject.path;

  constructor(
    private utilsService: UtilsService
  ) {}


  public copyLink(): void {
    navigator.clipboard.writeText(this.utilsService.getCurrentURL());
  }
}
