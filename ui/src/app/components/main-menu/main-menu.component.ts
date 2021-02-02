import { Router } from '@angular/router';
import { langSubject } from './../lang-menu/lang-menu.component';
import { IMenuNavLink } from '../../interfaces/IMenuNavLink';
import { Component, OnInit } from '@angular/core';
import { ROUTS } from '../../shared/const';


@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.sass'],
})
export class MainMenuComponent implements OnInit {
  public isChecked: boolean;
  public navLinks: Array<IMenuNavLink>;

  constructor(
    private router: Router
  ) {}

  public onClose(): void {
    this.isChecked = false;
  }

  ngOnInit() {
    this.updateNavLinksLang();

    langSubject.subscribe(() => this.updateNavLinksLang());
  }

  public isLinkActive(url: string): boolean {
    return this.router.url.split('/')[2] === url[1];
  }

  private updateNavLinksLang(): void {
    this.navLinks = 
    [
      {
        label: $localize`Дистрибутивний аналіз`,
        title: 'Когнітивно-семантичні обчислення за допомогою векторних моделей дистрибутивної семантики',
        path: [langSubject.value, ROUTS.root.lang.processing.path, ROUTS.root.lang.processing.terms.path],
      },
      {
        label: $localize`Про проєкт`,
        title: 'Загальна відомості про цей проєкт',
        path: [langSubject.value, ROUTS.root.lang.aboutProject.aboutProject.path],
      },
      {
        label: $localize`Корисні посилання`,
        title: 'Посилання на корисні ресурси',
        path: [langSubject.value, ROUTS.root.lang.aboutProject.sources.path],
      },
      {
        label: $localize`Колектив розробників`,
        title: 'Інформація про розробників проєкту',
        path: [langSubject.value, ROUTS.root.lang.aboutProject.developers.path],
      }
    ];    
  }

}
