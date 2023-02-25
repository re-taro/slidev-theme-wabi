import { resolve } from 'path';
import { defineWindiSetup } from '@slidev/types';

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        'nord-black': '#2e3440',
        'nord-white': '#e5e9f0',
      },
    },
  },
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
}));
