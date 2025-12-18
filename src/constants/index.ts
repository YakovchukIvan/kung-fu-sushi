import { NavItem } from '../types/index';

export const NAV_PAGES = [
  'Дракони',
  'Каліфорнія',
  'Макі',
  'Напої',
  'Нігірі',
  'Пропозиція тижня',
  'Від шефа',
  'Сети',
  'Новинки (авторські роли)',
  'Філадельфія',
  'Футомака',
  'Новинки(pumpkinrolls)',
  'Вега роли',
] as const;

export const CATEGORIES = [
  'Dracon',
  'California',
  'Maki',
  'Drinks',
  'Nigiri',
  'Offer-of-the-week',
  'from-boss',
  'Sets',
  'Novelty-master',
  'Philadelphia',
  'Futomaki',
  'Novelty',
  'Vega-roles',
] as const;

export const NAV_ITEMS: NavItem[] = [
  {
    to: '/favorites',
    title: 'Обране',
    icon: '/img/heart.svg',
    alt: 'heart-icon',
  },
  {
    to: '/orders',
    title: 'Замовлення',
    icon: '/img/user.svg',
    alt: 'Замовлення',
  },
];
