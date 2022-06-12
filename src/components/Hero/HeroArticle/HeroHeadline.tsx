import { Text } from '@nextui-org/react'
import React from 'react'

interface HeroHeadlineProps {
  children: React.ReactNode
}

export default function HeroHeadline({ children }: HeroHeadlineProps) {
  return (
    <Text
      h1
      size="$xl3"
      css={{
        textAlign: 'center',
        wordWrap: 'anywhere',
        '@xs': {
          fs: '$xl5',
        },
        '@sm': {
          fs: '$xl7',
          wordWrap: 'normal',
        },
      }}
    >
      {children}
    </Text>
  )
}
