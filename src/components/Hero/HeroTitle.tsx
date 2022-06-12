import { Text } from '@nextui-org/react'
import React from 'react'

interface HeroTitleProps {
  children: React.ReactNode
}

export default function HeroTitle({ children }: HeroTitleProps) {
  return (
    <Text
      h1
      size="$xl4"
      weight="bold"
      css={{
        ta: 'center',
        textGradient: '45deg, #FFD02C -20%, #FF912C 80%',
        '@xs': {
          fs: '$xl6',
        },
      }}
    >
      {children}
    </Text>
  )
}
