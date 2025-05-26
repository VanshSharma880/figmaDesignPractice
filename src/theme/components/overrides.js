export default function componentsOverride(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '16px',
        },
      },
    },
  };
}