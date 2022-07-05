import React from 'react'
import Head from 'next/head'
import { Spacer } from '@nextui-org/react'
import MainLayout from 'layouts/MainLayout'
import Hero from 'components/Hero/Hero'
import Advantages from 'components/Advantages/Advantages'
import Order from 'components/Order/Order'
import Services from 'components/Services/Services'
import Team from 'components/Team/Team'
import Reviews from 'components/Reviews/Reviews'
import Request from 'components/Request/Request'
import Contacts from 'components/Contacts/Contacts'
import data from 'data/data'
import type { NextPage } from 'next'

const sectionSpace = 10

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.desc} />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <MainLayout>
        <Hero />
        <Spacer y={sectionSpace} />
        <Order />
        <Spacer y={sectionSpace} />
        <Advantages />
        <Spacer y={sectionSpace} />
        <Team />
        <Spacer y={sectionSpace} />
        <Services />
        {/*<Spacer y={sectionSpace} />*/}
        {/*<Features />*/}
        <Spacer y={sectionSpace} />
        <Reviews />
        <Spacer y={sectionSpace} />
        <Request />
        <Spacer y={sectionSpace} />
        <Contacts />
      </MainLayout>
    </div>
  )
}

export default Home
