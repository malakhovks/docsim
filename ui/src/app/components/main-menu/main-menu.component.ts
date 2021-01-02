import { IMenuNavLink } from '../../interfaces/IMenuNavLink';
import { Component} from '@angular/core';
import { ROUTS } from '../../shared/const';


@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.sass'],
})
export class MainMenuComponent {
  public isChecked: boolean;
  public navLinks: Array<IMenuNavLink> = [
    {
      label: 'Дистрибутивний аналіз',
      title: 'Когнітивно-семантичні обчислення за допомогою векторних моделей дистрибутивної семантики',
      link: [ROUTS.root.processing.path, ROUTS.root.processing.terms.path],
    },
    {
      label: 'Про проєкт',
      title: 'Загальна відомості про цей проєкт',
      link: [ROUTS.root.aboutProject.aboutProject.path],
    },
    {
      label: 'Корисні посилання',
      title: 'Посилання на корисні ресурси',
      link: [ROUTS.root.aboutProject.sources.path],
    },
    {
      label: 'Колектив розробників',
      title: 'Інформація про розробників проєкту',
      link: ['/', ROUTS.root.aboutProject.developers.path],
    }
  ];

  constructor() {}

  public onClose(): void {
    this.isChecked = false;
  }
}
