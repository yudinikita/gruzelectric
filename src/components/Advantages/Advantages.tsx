import React from 'react'
import { v4 } from 'uuid'
import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import AdvantageItem from 'components/Advantages/AdvantageItem'
import data from 'data/data'
import { animConfig } from 'config/animConfig'

export type AdvantageType = {
  title: string
  description: string
}

export default function Advantages() {
  return (
    <Container as="section" fluid>
      <motion.div {...animConfig.title}>
        <Text h2 size="12vw" css={{ ta: 'center', '@xs': { fs: '$xl6' } }}>
          {data.advantages.title}
        </Text>
      </motion.div>
      <Spacer y={3} />
      <motion.div {...animConfig.block}>
        <Grid.Container gap={3} justify="center">
          {renderAdvantages(data.advantages.items)}
        </Grid.Container>
      </motion.div>
    </Container>
  )
}

const renderAdvantages = (advantages: AdvantageType[]) => {
  return advantages.map(({ title, description }, index) => {
    return (
      <Grid xs key={v4()}>
        <motion.div
          {...animConfig.block}
          transition={{
            duration: animConfig.block.transition.duration * index,
          }}
        >
          <AdvantageItem title={title} description={description} />
        </motion.div>
      </Grid>
    )
  })
}
