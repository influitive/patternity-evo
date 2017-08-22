import { darken, lighten } from '../utils/colors.js';

export default function(theme) {
  const newTheme = {
    themeColorPrimary: '#08a5c5',
    ...theme
  };
  const { themeColorPrimary } = newTheme;

  return {
    primary: {
      'background-color': themeColorPrimary,
      'border-color': themeColorPrimary,
      '&:hover': {
        'background-color': lighten(themeColorPrimary, .1)
      }
    },
    secondary: {
      'border-color': themeColorPrimary,
      'color': themeColorPrimary,
      '&:hover': {
        'border-color': darken(themeColorPrimary, 0.2),
        'color': darken(themeColorPrimary, 0.2)
      }
    }
  };
}
