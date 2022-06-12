import React from 'react'
import { Container, Grid } from '@nextui-org/react'

interface RequestContainerProps {
  children: React.ReactNode
}

export default function RequestContainer({ children }: RequestContainerProps) {
  return (
    <Container as="section" fluid>
      <Grid.Container
        id="form-request"
        gap={4}
        css={{
          bg: '$gradient',
          br: '$base',
          p: '0',
          '@sm': { p: '3.33vw !important' },
        }}
      >
        {children}
      </Grid.Container>
    </Container>
  )
}
