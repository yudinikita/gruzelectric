import React from 'react'
import { Container, Text } from '@nextui-org/react'

export default function Footer() {
  return (
    <Container as="footer" fluid display="flex" justify="center">
      <Text color="$gray800">© Грузовой Автоэлектрик, 1980-2077</Text>
    </Container>
  )
}
