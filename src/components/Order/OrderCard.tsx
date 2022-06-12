import React from 'react'
import { Button, Text, Card } from '@nextui-org/react'

interface OrderCardProps {
  title?: string
  subtitle?: string
  action?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function OrderCard({
  title = '',
  subtitle = '',
  action = '',
  onClick,
}: OrderCardProps) {
  return (
    <Card
      css={{
        w: '100%',
        p: '20px',
        '@xs': {
          p: '40px 0 30px 80px',
        },
      }}
      variant="bordered"
    >
      <Card.Body>
        <Text
          h3
          size="$xl4"
          css={{
            fs: '6vw',
            fontWeight: 'normal',
            '@xs': {
              fs: '$xl4',
              fontWeight: 'bold',
            },
          }}
        >
          {subtitle}
        </Text>
        <Text
          h2
          size="$xl5"
          css={{
            fs: '7vw',
            '@xs': {
              fs: '$xl5',
            },
          }}
        >
          {title}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button size="lg" auto ghost onClick={onClick}>
          {action}
        </Button>
      </Card.Footer>
    </Card>
  )
}
