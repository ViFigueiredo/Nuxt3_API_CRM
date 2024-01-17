import { pt } from './pt.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: {
    pt,
    en: {
      title: 'Home Page',
    },
  },
}));
