import React from 'react'
import { Container } from '@nextui-org/react'

interface NavBarContainerProps {
  children: React.ReactNode
}

export default function NavBarContainer({ children }: NavBarContainerProps) {
  return (
    <Container
      fluid
      display="flex"
      justify="space-between"
      alignItems="center"
      wrap="wrap"
      css={{
        '@sm': {
          flexWrap: 'nowrap',
        },
      }}
    >
      {children}
    </Container>
  )
}
