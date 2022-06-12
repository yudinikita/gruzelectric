import React from 'react'
import { Container } from '@nextui-org/react'

interface HeroContainerProps {
  children: React.ReactNode
}

export default function HeroContainer({ children }: HeroContainerProps) {
  return (
    <Container
      fluid
      display="flex"
      direction="column"
      alignContent="stretch"
      alignItems="stretch"
      css={{ '*': { zIndex: 1 } }}
    >
      {children}
    </Container>
  )
}
