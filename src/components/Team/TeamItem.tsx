import React from 'react'
import { Spacer, Text, Image, Container, Row, Link } from '@nextui-org/react'

export interface TeamItemProps {
  name: string
  position: string
  link?: string
}

export default function TeamItem({ name, position, link }: TeamItemProps) {
  return (
    <div>
      <Container fluid display="flex" alignItems="center">
        <Row align="center">
          <Text h3 size="$xl2" css={{ '@xs': { fs: '$xl5' } }}>
            {name}
          </Text>
          {renderLink(link)}
        </Row>
        <Spacer y={-1} />
        <Row>
          <Text
            size="$xl2"
            color="$gray500"
            weight="bold"
            css={{ lh: '$small', '@xs': { fs: '$xl5' } }}
          >
            {position}
          </Text>
        </Row>
      </Container>
    </div>
  )
}

const renderLink = (link?: string) =>
  link ? (
    <Link href={link} target="_blank">
      <Spacer x={1} />
      <Image
        width={50}
        height={50}
        src="/static/images/whatsapp.svg"
        alt="WhatsApp"
      />
    </Link>
  ) : null
