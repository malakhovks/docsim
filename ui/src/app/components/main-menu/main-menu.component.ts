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
      label: 'Робота з моделями',
      title: 'Обчислення за допомогою векторних моделей',
      link: [ROUTS.root.processing.path, ROUTS.root.processing.terms.path],
    },
    {
      label: 'Про проект',
      title: 'Про цей проект',
      link: [ROUTS.root.aboutProject.aboutProject.path],
    },
    {
      label: 'Корисні посилання',
      title: 'Посилання на корисні ресурси',
      link: [ROUTS.root.aboutProject.sources.path],
    },
    {
      label: 'Колектив розробників',
      title: 'Інформація про розробників проекту',
      link: ['/', ROUTS.root.aboutProject.developers.path],
    }
  ];

  constructor() {}

  public onClose(): void {
    this.isChecked = false;
  }
}
