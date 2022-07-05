import React from 'react'
import { Container, Text, Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { animConfig } from 'config/animConfig'
import data from 'data/data'

export default function About() {
  return (
    <motion.div {...animConfig.block}>
      <Container as="section" fluid display="flex" direction="column">
        <motion.div {...animConfig.title}>
          <Text h2 size="12vw" css={{ ta: 'center', '@xs': { fs: '$xl7' } }}>
            О нас
          </Text>
        </motion.div>
        <Spacer />
        <Text
          color="$gray800"
          css={{
            ta: 'center',
            w: 'auto',
            '@md': {
              w: '43.26vw',
            },
          }}
        >
          {data.hero.description}
        </Text>
      </Container>
    </motion.div>
  )
}
