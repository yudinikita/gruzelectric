import React from 'react'
import { Container } from '@nextui-org/react'

interface FeaturesContainerProps {
  children: React.ReactNode
}

export default function FeaturesContainer({
  children,
}: FeaturesContainerProps) {
  return (
    <Container
      as="section"
      fluid
      display="flex"
      direction="column"
      alignContent="flex-end"
      alignItems="flex-end"
    >
      {children}
    </Container>
  )
}
