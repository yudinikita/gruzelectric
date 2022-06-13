import React, { MouseEventHandler } from 'react'
import { useRouter } from 'next/router'
import { Container, Col, Row, Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'
import OrderCard from 'components/Order/OrderCard'
import OrderAction from 'components/Order/OrderAction'
import data from 'data/data'
import { animConfig } from 'config/animConfig'

export default function Order() {
  const router = useRouter()

  const handleClickCard: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    router.push(`tel:+${data.contacts.tel.href}`)
  }

  const handleClickAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    router.push('#form-request')
  }

  return (
    <motion.div {...animConfig.block}>
      <Container as="section" fluid display="flex">
        <Row
          fluid
          css={{
            flexDirection: 'column',
            '@md': {
              flexDirection: 'row',
            },
          }}
        >
          <Col>
            <OrderCard
              title={data.contacts.tel.title}
              subtitle={data.order.card.title}
              action={data.order.card.action}
              onClick={handleClickCard}
            />
          </Col>
          <Spacer x={2} />
          <Col css={{ h: '100%' }}>
            <OrderAction
              title={data.order.action.title}
              onClick={handleClickAction}
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}
