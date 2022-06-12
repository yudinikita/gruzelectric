import React from 'react'
import { Row, Spacer } from '@nextui-org/react'
import HeroHeadline from 'components/Hero/HeroArticle/HeroHeadline'
import HeroDescription from 'components/Hero/HeroArticle/HeroDescription'

interface HeroArticleProps {
  headline: string
  description: string
}

export default function HeroArticle({
  headline,
  description,
}: HeroArticleProps) {
  return (
    <article>
      <Row fluid wrap="wrap" justify="center">
        <HeroHeadline>{headline}</HeroHeadline>
      </Row>
      <Spacer y={3} />
      <Row fluid wrap="wrap" justify="center">
        <HeroDescription>{description}</HeroDescription>
      </Row>
    </article>
  )
}
