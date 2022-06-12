import React from 'react'
import { Row, Spacer } from '@nextui-org/react'
import HeroWrapper from 'components/Hero/HeroWrapper'
import HeroContainer from 'components/Hero/HeroContainer'
import HeroTitle from 'components/Hero/HeroTitle'
import HeroSubtitle from 'components/Hero/HeroSubtitle'
import HeroArticle from 'components/Hero/HeroArticle/HeroArticle'
import data from 'data/data'

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <Spacer y={6} />
        <Row fluid wrap="wrap" justify="center">
          <HeroTitle>{data.hero.title}</HeroTitle>
        </Row>
        <Spacer y={1} />
        <Row fluid wrap="wrap" justify="center">
          <HeroSubtitle>{data.hero.subtitle}</HeroSubtitle>
        </Row>
        <Spacer y={1} />
        <Row fluid wrap="wrap" justify="center">
          <HeroArticle
            headline={data.hero.headline}
            description={data.hero.description}
          />
        </Row>
      </HeroContainer>
    </HeroWrapper>
  )
}
