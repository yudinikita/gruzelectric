import { styled } from '@nextui-org/react'

const MobileMenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'fixed',
  left: '0',
  top: '20vw',
  zIndex: '501',
  width: '100%',
  '@md': {
    position: 'static',
    flexDirection: 'row',
    height: 'auto',
    background: 'transparent',
    width: 'auto',
  },
  variants: {
    open: {
      true: {
        '@md': {
          display: 'flex',
        },
      },
      false: {
        display: 'none',
        '@md': {
          display: 'flex',
        },
      },
    },
  },
})

export default MobileMenuContainer
