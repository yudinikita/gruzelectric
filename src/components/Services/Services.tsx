import React from 'react'
import { Text, Grid, Container } from '@nextui-org/react'
import { v4 } from 'uuid'
import { motion } from 'framer-motion'
import ServiceItem from 'components/Services/ServiceItem'
import data from 'data/data'
import { animConfig } from 'config/animConfig'

export type ServiceType = {
  title: string
  description: string
}

export default function Services() {
  return (
    <motion.div {...animConfig.block}>
      <Container as="section" fluid>
        <Grid.Container
          id="services"
          gap={4}
          alignItems="center"
          css={{ bg: '$white', br: '$base' }}
        >
          <Grid xs={12} sm={6}>
            <Text h2 size="12vw" color="$black" css={{ '@sm': { fs: '$xl6' } }}>
              {data.services.title}
            </Text>
          </Grid>
          <Grid xs={12} sm={6}>
            <Grid.Container gap={3} justify="center">
              {renderServiceItems(data.services.items)}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </motion.div>
  )
}

const renderServiceItems = (services: ServiceType[]) => {
  return services.map(({ title, description }) => {
    return (
      <Grid xs key={v4()}>
        <ServiceItem title={title} description={description} />
      </Grid>
    )
  })
}
