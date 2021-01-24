import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage-service';


const LANG_QUERY_PARAM = 'lang';

@Component({
  selector: 'app-lang-menu',
  templateUrl: 'lang-menu.component.html',
  styleUrls: ['lang-menu.component.sass'],
})
export class LanguageMenuComponent implements OnInit {
  public langList: string[] = ['ukr', 'eng'];
  public activeItem: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  // TODO: prevent reload loop!
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe((params: Params) => {
      let lang: string = params[LANG_QUERY_PARAM];  // try to get current language by URL query params;

      if (lang === undefined) {
        lang = this.localStorageService.getItem(LANG_QUERY_PARAM);  // try to get language from local storage;
      }

      // if () {
      // }
      this.onLangChange(lang ? lang : this.langList[0]);
    });
  }

  public onLangChange($ev: string): void {
    if ($ev !== this.activeItem) {
      this.activeItem = $ev;
  
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { lang: this.activeItem },
        queryParamsHandling: 'merge'
      });

      // Add active model to local storage:
      this.localStorageService.setItem(LANG_QUERY_PARAM, $ev);

      // update and reload page with new language;
      location.reload();
    } 
  }
}
