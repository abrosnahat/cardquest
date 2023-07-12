import { Page, PageKey } from '../types/pages';

export const PAGES_CONFIG: { [key in PageKey]: Page } = {
  login: {
    key: 'login',
    titlePhrase: 'pages.login.title',
    route: '/login',
    type: 'public',
  },
  registration: {
    key: 'registration',
    titlePhrase: 'pages.registration.title',
    route: '/registration',
    type: 'public',
  },
  tasks: {
    key: 'tasks',
    titlePhrase: 'pages.tasks.title',
    route: '/tasks',
    type: 'common',
  },
};

export const PUBLIC_PAGES = Object.values(PAGES_CONFIG).filter(
  (page) => page.type === 'public'
);

export const COMMON_PAGES = Object.values(PAGES_CONFIG).filter(
  (page) => page.type === 'common'
);
