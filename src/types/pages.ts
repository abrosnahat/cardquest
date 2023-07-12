export type PageKey = 'login' | 'registration' | 'tasks';

export interface Page {
  key: PageKey;
  titlePhrase: string;
  route: string;
  type?: 'common' | 'public';
}
