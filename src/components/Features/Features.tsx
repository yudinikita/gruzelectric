import React from 'react'
import { Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'
import FeaturesContainer from 'components/Features/FeaturesContainer'
import FeaturesTitle from 'components/Features/FeaturesTitle'
import FeaturesCard from 'components/Features/FeaturesCard'
import { animConfig } from 'config/animConfig'

export default function Features() {
  return (
    <FeaturesContainer>
      <FeaturesTitle text="Подход имеет значение" />
      <Spacer y={2} />
      <motion.div {...animConfig.block}>
        <FeaturesCard />
      </motion.div>
    </FeaturesContainer>
  )
}
