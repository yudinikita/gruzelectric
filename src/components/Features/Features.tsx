import React from 'react'
import { Spacer } from '@nextui-org/react'
import FeaturesContainer from 'components/Features/FeaturesContainer'
import FeaturesTitle from 'components/Features/FeaturesTitle'
import FeaturesCard from 'components/Features/FeaturesCard'

export default function Features() {
  return (
    <FeaturesContainer>
      <FeaturesTitle text="Подход имеет значение" />
      <Spacer y={2} />
      <FeaturesCard />
    </FeaturesContainer>
  )
}
