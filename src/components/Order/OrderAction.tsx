import React from 'react'
import { Button } from '@nextui-org/react'

interface OrderActionProps {
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function OrderAction({ title, onClick }: OrderActionProps) {
  return (
    <Button
      size="xl"
      onClick={onClick}
      auto
      css={{
        w: '100%',
        h: '100%',
        fontSize: '$xl4',
        minHeight: '30vh',
        fs: '6vw',
        '@xs': {
          fs: '$xl4',
        },
      }}
    >
      {title}
    </Button>
  )
}
