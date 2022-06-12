import React from 'react'
import { Card, Spacer, Text } from '@nextui-org/react'
import FeaturesMessage from 'components/Features/FeaturesMessage'

export default function FeaturesCard() {
  return (
    <Card
      variant="bordered"
      css={{
        bg: 'transparent',
        p: '0',
        '@sm': { p: '2.33vw', mw: '46vw' },
      }}
    >
      <Card.Header>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            size="8vw"
            weight="bold"
            css={{
              textGradient: '45deg, #FFD02C -20%, #FF912C 80%',
              '@sm': { fs: '$xl4' },
            }}
          >
            Ваш персональный менеджер
          </Text>
          <Text
            size="8vw"
            color="$gray600"
            weight="bold"
            css={{
              '@sm': { fs: '$xl4' },
            }}
          >
            всегда готов ответить на все вопросы и помочь узнать цену на ремонт
          </Text>
        </div>
      </Card.Header>
      <Spacer y={1} />
      <Card.Body>
        <FeaturesMessage
          name="Меня зовут Камилла!"
          avatarSrc="/static/images/kamilla.jpg"
          text="Привет! Я менеджер по работе с клиентами. Буду рада ответить на все вопросы 😁"
          buttonText="Написать"
        />
      </Card.Body>
    </Card>
  )
}
