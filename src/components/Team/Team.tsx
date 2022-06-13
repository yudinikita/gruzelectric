import React from 'react'
import { Container, Text, Grid } from '@nextui-org/react'
import { v4 } from 'uuid'
import { motion } from 'framer-motion'
import TeamItem from 'components/Team/TeamItem'
import data from 'data/data'
import { animConfig } from 'config/animConfig'

export type TeamType = {
  name: string
  position: string
  link?: string
}

export default function Team() {
  return (
    <Container
      as="section"
      fluid
      display="flex"
      direction="column"
      css={{ '@xs': { mw: '50vw' } }}
    >
      <motion.div {...animConfig.title}>
        <Text h2 size="12vw" css={{ ta: 'center', '@xs': { fs: '$xl7' } }}>
          {data.teams.title}
        </Text>
      </motion.div>
      <Grid.Container gap={3} css={{ gridGap: '2.22vw' }}>
        {renderTeams(data.teams.items)}
      </Grid.Container>
    </Container>
  )
}

const renderTeams = (teams: TeamType[]) => {
  return teams.map(({ name, position, link }) => {
    return (
      <Grid xs={12} key={v4()}>
        <motion.div {...animConfig.block}>
          <TeamItem name={name} position={position} link={link} />
        </motion.div>
      </Grid>
    )
  })
}
