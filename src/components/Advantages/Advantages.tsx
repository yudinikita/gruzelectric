import React from 'react'
import { v4 } from 'uuid'
import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import AdvantageItem from 'components/Advantages/AdvantageItem'
import data from 'data/data'

export type AdvantageType = {
  title: string
  description: string
}

export default function Advantages() {
  return (
    <Container as="section" fluid>
      <Text h2 size="12vw" css={{ ta: 'center', '@xs': { fs: '$xl6' } }}>
        {data.advantages.title}
      </Text>
      <Spacer y={3} />
      <Grid.Container gap={3} justify="center">
        {renderAdvantages(data.advantages.items)}
      </Grid.Container>
    </Container>
  )
}

const renderAdvantages = (advantages: AdvantageType[]) => {
  return advantages.map(({ title, description }) => {
    return (
      <Grid xs key={v4()}>
        <AdvantageItem title={title} description={description} />
      </Grid>
    )
  })
}
