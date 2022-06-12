import { Text } from '@nextui-org/react'
import React from 'react'

interface HeroSubtitleProps {
  children: React.ReactNode
}

export default function HeroSubtitle({ children }: HeroSubtitleProps) {
  return (
    <Text
      h2
      size="$xl3"
      css={{
        ta: 'center',
        '@xs': {
          fs: '$xl4',
        },
      }}
    >
      {children}
    </Text>
  )
}
