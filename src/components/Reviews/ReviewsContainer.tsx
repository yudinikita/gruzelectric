import React from 'react'
import { Container } from '@nextui-org/react'

interface ReviewsContainerProps {
  children: React.ReactNode
}

export default function ReviewsContainer({ children }: ReviewsContainerProps) {
  return (
    <Container
      as="section"
      id="reviews"
      fluid
      display="flex"
      direction="column"
      alignContent="flex-start"
      alignItems="flex-start"
    >
      {children}
    </Container>
  )
}
