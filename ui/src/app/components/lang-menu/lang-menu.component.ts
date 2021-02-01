import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { langList } from 'src/app/app-routing.module';
import { LocalStorageService } from './../../services/local-storage-service';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';


const LANG_QUERY_PARAM = 'lang';
export const langSubject: BehaviorSubject<string> = new BehaviorSubject<string>(langList[0]);

@Component({
  selector: 'app-lang-menu',
  templateUrl: 'lang-menu.component.html',
  styleUrls: ['lang-menu.component.sass'],
})
export class LanguageMenuComponent implements OnInit {
  public langList: string[] = langList;

  constructor(
    private router: Router,
    private location: Location,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    const casсhedLangPath: string = this.localStorageService.getItem(LANG_QUERY_PARAM);  // try to get language from local storage;
    
    console.log('casсhedLangPath', casсhedLangPath);
    
    if (!casсhedLangPath) {
      const langPath: string = this.location.path().split('/')[1];
      console.log('langPath', langPath);
      

      langSubject.next(langPath);
      this.saveCurrentLangPath(langPath);
    } else {
      langSubject.next(casсhedLangPath);
    }
  }

  public get activeItem(): string {
    return langSubject.value;
  }


  public onLangChange($ev: string): void {
    langSubject.next($ev);

    const url: string = this.changeLangParamInUrl(this.router.url, $ev);
    
    // Change URL:
    this.location.replaceState(url);

    // Save lang path:
    this.saveCurrentLangPath($ev);

    // Reload and get new lang sources from server:
    location.reload();
  }


  private saveCurrentLangPath(path: string): void {
    this.localStorageService.setItem(LANG_QUERY_PARAM, path);
  }


  private changeLangParamInUrl(url: string, targetLang: string): string {
    const urlArr: string[] = url.split('/');

    urlArr[1] = targetLang;

    return urlArr.join('/');
  }
}
