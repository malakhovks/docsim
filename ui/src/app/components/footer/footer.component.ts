import { UtilsService } from './../../services/utils-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  public currentYear: number = this.utilsService.getCurrentYear();

  constructor(
    private utilsService: UtilsService
  ) { }


}
