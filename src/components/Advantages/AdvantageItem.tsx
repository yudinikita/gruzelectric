import React from 'react'
import { Text } from '@nextui-org/react'

export interface AdvantageItemProps {
  title: string
  description: string
}

export default function AdvantageItem({
  title,
  description,
}: AdvantageItemProps) {
  return (
    <div>
      <Text
        h3
        size="$xl3"
        css={{ wordWrap: 'anywhere', '@xs': { wordWrap: 'normal' } }}
      >
        {title}
      </Text>
      <Text color="$gray700">{description}</Text>
    </div>
  )
}
