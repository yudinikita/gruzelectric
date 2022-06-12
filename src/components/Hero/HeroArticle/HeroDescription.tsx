import { Text } from '@nextui-org/react'
import React from 'react'

interface HeroDescriptionProps {
  children: React.ReactNode
}

export default function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <Text
      color="$gray800"
      css={{
        ta: 'center',
        w: 'auto',
        '@md': {
          w: '43.26vw',
        },
      }}
    >
      {children}
    </Text>
  )
}
