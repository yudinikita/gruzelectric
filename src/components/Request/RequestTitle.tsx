import React from 'react'
import { Text } from '@nextui-org/react'

interface RequestTitleProps {
  text: string
}

export default function RequestTitle({ text }: RequestTitleProps) {
  return (
    <Text h2 size="8vw" color="$black" css={{ '@sm': { fs: '$xl7' } }}>
      {text}
    </Text>
  )
}
