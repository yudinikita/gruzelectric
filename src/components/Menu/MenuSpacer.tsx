import { Spacer, styled } from '@nextui-org/react'

const MenuSpacer = styled(Spacer, {
  display: 'none !important',
  '@lg': {
    display: 'block !important',
  },
})

export default MenuSpacer
