import React from 'react'
import { Avatar, Button, Card, Spacer, Text } from '@nextui-org/react'

interface FeaturesMessageProps {
  name: string
  avatarSrc: string
  text: string
  buttonText: string
}

export default function FeaturesMessage({
  name,
  avatarSrc,
  text,
  buttonText,
}: FeaturesMessageProps) {
  return (
    <Card css={{ p: '0', '@sm': { p: '2.33vw' } }}>
      <Card.Header>
        <Avatar size="xl" src={avatarSrc} squared bordered />
        <Spacer x={1} />
        <Text size="8vw" weight="bold" css={{ '@sm': { fs: '$xl4' } }}>
          {name}
        </Text>
      </Card.Header>
      <Card.Body>
        <Text
          size="8vw"
          color="$gray600"
          weight="bold"
          css={{ '@sm': { fs: '$xl4' } }}
        >
          {text}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button auto size="xl">
          {buttonText}
        </Button>
      </Card.Footer>
    </Card>
  )
}
