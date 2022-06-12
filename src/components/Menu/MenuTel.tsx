import React from 'react'
import { Text, Link, Tooltip } from '@nextui-org/react'

interface MenuTelProps {
  title: string
  href: string
}

export default function MenuTel({ title, href = '' }: MenuTelProps) {
  return (
    <div>
      <Tooltip
        content="Бесплатный звонок"
        rounded
        color="invert"
        placement="bottom"
      >
        <Link href={`tel:+${href}`} block color="primary">
          <Text b>{title}</Text>
        </Link>
      </Tooltip>
    </div>
  )
}
