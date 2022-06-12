import React from 'react'
import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

interface MenuItemProps {
  children: React.ReactNode
  to: string
}

export default function MenuItem({ children, to = '/' }: MenuItemProps) {
  return (
    <NextLink href={to}>
      <Link block color="primary">
        {children}
      </Link>
    </NextLink>
  )
}
