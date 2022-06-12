import React from 'react'
import { Button } from '@nextui-org/react'
import MenuIcon from 'assets/icons/MenuIcon'
import CloseIcon from 'assets/icons/CloseIcon'

interface MenuToggleProps {
  toggle: React.MouseEventHandler<HTMLButtonElement>
  isOpen: boolean
}

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Button
      auto
      color="default"
      onClick={toggle}
      icon={isOpen ? <CloseIcon /> : <MenuIcon />}
      css={{
        zIndex: '501',
        background: 'transparent',
        '@md': {
          display: 'none',
        },
      }}
    />
  )
}
