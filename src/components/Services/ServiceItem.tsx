import React from 'react'
import { Spacer, Text } from '@nextui-org/react'

export interface ServiceItemProps {
  title: string
  description: string
}

export default function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div>
      <Text h3 size="$xl2" color="$black">
        {title}
      </Text>
      <Spacer y={0.5} />
      <Text size="$md" color="$gray700">
        {description}
      </Text>
    </div>
  )
}
