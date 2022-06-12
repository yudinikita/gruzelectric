import React from 'react'
import { Grid, Text } from '@nextui-org/react'
import { v4 } from 'uuid'
import MenuItem from './MenuItem'

export type MenuLinkType = {
  to: string
  title: string
}

interface MenuLinksProps {
  links: MenuLinkType[]
}

export default function MenuLinks({ links = [] }: MenuLinksProps) {
  return (
    <Grid.Container
      as="nav"
      gap={2}
      alignItems="center"
      css={{
        flexDirection: 'column',
        '@md': {
          flexDirection: 'row',
          alignItems: 'baseline',
        },
      }}
    >
      {renderLinks(links)}
    </Grid.Container>
  )
}

const renderLinks = (links: MenuLinkType[]) => {
  return links.map(({ to, title }) => {
    return (
      <Grid key={v4()}>
        <MenuItem to={to}>
          <Text>{title}</Text>
        </MenuItem>
      </Grid>
    )
  })
}
