import React from 'react'
import { Text } from '@nextui-org/react'

interface FeaturesTitleProps {
  text: React.ReactNode
}

export default function FeaturesTitle({ text }: FeaturesTitleProps) {
  return (
    <Text h2 size="12vw" css={{ ta: 'right', '@sm': { fs: '$xl8' } }}>
      {text}
    </Text>
  )
}
