import React from 'react'
import { Text } from '@nextui-org/react'

interface ReviewsTitleProps {
  text: React.ReactNode
}

export default function ReviewsTitle({ text }: ReviewsTitleProps) {
  return (
    <Text h2 size="12vw" css={{ ml: '0', ta: 'left', '@sm': { fs: '$xl8' } }}>
      {text}
    </Text>
  )
}
