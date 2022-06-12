import React from 'react'
import { styled } from '@nextui-org/react'

interface MainProps {
  children: React.ReactNode
}

const MainContainer = styled('main', {
  padding: '6.25vw 5vw 0',
  position: 'relative',
  '@sm': {
    padding: '2.08vw 2.77vw 0',
  },
})

export default function Main({ children }: MainProps) {
  return <MainContainer>{children}</MainContainer>
}
