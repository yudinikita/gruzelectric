import React from 'react'
import { Spacer } from '@nextui-org/react'
import Main from 'components/Main/Main'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Main>
        <Header />
        {children}
        <Spacer y={5} />
        <Footer />
        <Spacer y={5} />
      </Main>
    </>
  )
}
