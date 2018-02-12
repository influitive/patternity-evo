export default function(theme) {
  const newTheme = {
    themeColorPrimary: '#08a5c5',
    ...theme
  };
  const { themeColorPrimary } = newTheme;

  return {
    'option': {
      '&:before': {
        'background-color': themeColorPrimary
      }
    }
  };
}
