import { styled } from '@nextui-org/react'

const MobileBackgroundMenu = styled('div', {
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,.6)',
  zIndex: '500',
  backdropFilter: 'blur(10px)',
  variants: {
    open: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})

export default MobileBackgroundMenu
