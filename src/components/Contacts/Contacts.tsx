import React from 'react'
import { Container, Text, Grid, Tooltip, Link, Spacer } from '@nextui-org/react'
import Map from 'components/Map/Map'

export default function Contacts() {
  return (
    <Container as="section" id="contacts" fluid>
      <Text h2 size="12vw" css={{ ta: 'center', '@sm': { fs: '$xl8' } }}>
        Контакты
      </Text>
      <Spacer y={2} />
      <Map />
      <Spacer y={3} />
      <Grid.Container gap={3} alignItems="flex-start">
        <Grid xs={12} sm={4} justify="center" css={{ ta: 'center' }}>
          <Link>
            <Text size="$xl2">Рязань, М-5 Урал, 197-й километр, 5Г</Text>
          </Link>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Tooltip
            content="Бесплатный звонок"
            rounded
            color="invert"
            placement="top"
          >
            <Link href="tel:+88005113903">
              <Text size="$xl2">8 800 511-39-03</Text>
            </Link>
          </Tooltip>
          <Text small color="$gray700" weight="bold">
            пн-пт — с 09:00 до 18:00
          </Text>
        </Grid>
        <Grid xs={12} sm={4} justify="center">
          <Link href="mailto:gruzelectric@yandex.ru">
            <Text size="$xl2">gruzelectric@yandex.ru</Text>
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
