import { join } from 'path';
import { defineShikiSetup } from '@slidev/types';

/**
 * IShikiTheme needs to set the theme in case of dark mode, but `slidev-theme-wabi` does not have dark mode.
 */
export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(join(__dirname, './nord/default.json')),
      light: await loadTheme(join(__dirname, './nord/default.json')),
    },
  };
});
