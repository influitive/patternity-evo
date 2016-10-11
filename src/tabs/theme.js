export default function(theme) {
  const newTheme = {
    themeColorPrimary: '#08a5c5',
    ...theme
  };
  const { themeColorPrimary } = newTheme;
  return {
    default: {
      '& .nav > li > a:hover': {
        color: themeColorPrimary
      },
      '& .nav > li.active > a': {
        color: themeColorPrimary,
        'border-top': `3px solid ${themeColorPrimary} !important`
      }
    }
  };
}
