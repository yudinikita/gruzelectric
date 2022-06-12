import { createTheme, Theme } from '@nextui-org/react'

const fonts = {
  sans: 'Inter, sans-serif',
}

const sharedTheme: Theme = {
  theme: {
    fonts,
    colors: {
      primary: '$yellow600',
      primaryLight: '$yellow50',
      primaryLightHover: '$yellow100',
      primaryLightActive: '$yellow200',
      primaryLightContrast: '$yellow600',
      primarySolidContrast: '$black',
      selection: '$primary',
      gradient:
        'linear-gradient(217.09deg, #FFD02C 0%, #FF782C 100%), linear-gradient(0deg, #FFD02C, #FFD02C), #FFFFFF',
    },
    fontSizes: {
      base: '1.25rem',
    },
  },
}

export const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
})

export const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
})
