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
      'border-color': darken(themeColorPrimary, .1),
      'box-shadow': `0px 2px ${darken(themeColorPrimary, .1)}`,
      '&:hover': {
        'background-color': lighten(themeColorPrimary, .1),
        'box-shadow': `0px 2px ${themeColorPrimary}`
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
