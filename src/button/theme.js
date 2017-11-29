import { darken, lighten } from '../utils/colors.js';

export default function(theme) {
  const newTheme = {
    themeColorPrimary: '#08a5c5',
    ...theme
  };
  const { themeColorPrimary } = newTheme;

  return {
    primary: {
      'background-color': themeColorPrimary + '!important',
      'border-color': themeColorPrimary + '!important',
      '&:hover': {
        'background-color': lighten(themeColorPrimary, .1) + '!important'
      }
    },
    secondary: {
      'border-color': themeColorPrimary + '!important',
      'color': themeColorPrimary + '!important',
      '&:hover': {
        'border-color': darken(themeColorPrimary, 0.2) + '!important',
        'color': darken(themeColorPrimary, 0.2) + '!important'
      }
    }
  };
}
