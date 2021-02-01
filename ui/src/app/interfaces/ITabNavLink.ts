export interface ITabNavLink {
  label: string;
  title: string;
  index: number;
  link?: string[];
  subNav?: Array<ITabNavLink>
}

