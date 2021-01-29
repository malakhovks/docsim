import { langSubject } from './../lang-menu/lang-menu.component';
import { ROUTS } from './../../shared/const';
import { UtilsService } from './../../services/utils-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public currentYear: number = this.utilsService.getCurrentYear();
  public currentURL: string = this.utilsService.getCurrentURL();
  public aboutProjectLink: string[];

  constructor(
    private utilsService: UtilsService
  ) {}
  
  ngOnInit() {
    this.setCurrentLang();
  
    langSubject.subscribe(() => this.setCurrentLang());
  }

  private setCurrentLang(): void {
    this.aboutProjectLink = [langSubject.value, ROUTS.root.lang.aboutProject.aboutProject.path];
  }

  public copyLink(): void {
    navigator.clipboard.writeText(this.utilsService.getCurrentURL());
  }
}
