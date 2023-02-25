import { join } from 'path';
import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(join(__dirname, './nord/default.json')),
      light: await loadTheme(join(__dirname, './nord/default.json')),
    },
  };
});
