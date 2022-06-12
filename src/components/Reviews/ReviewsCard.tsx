import React from 'react'
import { Card, Text, User } from '@nextui-org/react'

export interface ReviewsCardProps {
  name: string
  desc: string
  avatarSrc?: string
  text: string
}

export default function ReviewsCard({
  name,
  desc,
  avatarSrc,
  text,
}: ReviewsCardProps) {
  return (
    <Card css={{ mw: 'auto', p: '2.33vw', '@sm': { mw: '46vw' } }}>
      <Card.Header>
        <User
          size="xl"
          name={name}
          src={avatarSrc}
          text={name}
          description={desc}
          squared
          bordered
          css={{ flexDirection: 'column', '@sm': { flexDirection: 'row' } }}
        />
      </Card.Header>
      <Card.Body>
        <Text size="text">{text}</Text>
      </Card.Body>
    </Card>
  )
}
