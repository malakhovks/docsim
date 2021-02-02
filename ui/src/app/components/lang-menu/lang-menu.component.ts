import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
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

  ngOnInit(): void {
    let langinItialized: boolean;

    this.router.events.subscribe((ev: RouterEvent) => {
      if (ev instanceof NavigationEnd && !langinItialized) {
        const langPathFromURL: string = location.href.split('/')[3];
        const langPathFromCaсhe: string = this.localStorageService.getItem(LANG_QUERY_PARAM);  // try to get language from local storage;

        if (langPathFromCaсhe && langPathFromCaсhe !== langPathFromURL && this.langList.includes(langPathFromCaсhe)) {
          this.onLangChange(langPathFromCaсhe);
        } else {
          langSubject.next(langPathFromURL);
          this.saveCurrentLangPath(langPathFromURL);
        }

        langinItialized = true;
      }
    })  
  }

  public get activeItem(): string {
    return langSubject.value;
  }


  public onLangChange($ev: string): void {
    langSubject.next($ev);

    const url: string = this.changeLangParamInUrl(this.router.url, $ev);
    
    this.saveCurrentLangPath($ev);
    
    this.location.replaceState(url);  // change URL;
    
    location.reload();  // reload and get new lang sources from server;
  }


  // Save current lang local:
  private saveCurrentLangPath(path: string): void {
    this.localStorageService.setItem(LANG_QUERY_PARAM, path);
  }


  private changeLangParamInUrl(url: string, targetLang: string): string {
    const urlArr: string[] = url.split('/');

    urlArr[1] = targetLang;

    return urlArr.join('/');
  }
}
