import React from 'react'
import { Button } from '@nextui-org/react'

interface MenuButtonProps {
  title: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function MenuButton({ title, onClick }: MenuButtonProps) {
  return (
    <Button onClick={onClick} color="primary" auto>
      {title}
    </Button>
  )
}
