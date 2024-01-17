import { pt, en } from './body.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: { pt, en },
}));
