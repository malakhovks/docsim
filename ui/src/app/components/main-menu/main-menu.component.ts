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

  constructor() {}

  public onClose(): void {
    this.isChecked = false;
  }

  ngOnInit() {
    this.updateNavLinksLang();

    langSubject.subscribe(() => this.updateNavLinksLang());
  }

  private updateNavLinksLang(): void {
    this.navLinks = 
    [
      {
        label: 'Дистрибутивний аналіз',
        title: 'Когнітивно-семантичні обчислення за допомогою векторних моделей дистрибутивної семантики',
        link: [langSubject.value, ROUTS.root.lang.processing.path, ROUTS.root.lang.processing.terms.path],
      },
      {
        label: 'Про проєкт',
        title: 'Загальна відомості про цей проєкт',
        link: [langSubject.value, ROUTS.root.lang.aboutProject.aboutProject.path],
      },
      {
        label: 'Корисні посилання',
        title: 'Посилання на корисні ресурси',
        link: [langSubject.value, ROUTS.root.lang.aboutProject.sources.path],
      },
      {
        label: 'Колектив розробників',
        title: 'Інформація про розробників проєкту',
        link: [langSubject.value, ROUTS.root.lang.aboutProject.developers.path],
      }
    ];    
  }

}
