import React, { MouseEventHandler } from 'react'
import { Card, Container, Text, Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { animConfig } from 'config/animConfig'

export default function Videocam() {
  const router = useRouter()

  const handleClickAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    router.push('#form-request')
  }

  return (
    <Container as="section" fluid>
      <motion.div {...animConfig.block}>
        <Card
          variant="bordered"
          isHoverable
          isPressable
          css={{
            bg: 'transparent',
            p: '0',
            '@sm': { p: '2.33vw', mw: '65vw' },
            m: '0 auto',
          }}
        >
          <Card.Header css={{ justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                size="8vw"
                weight="bold"
                css={{
                  textGradient: '45deg, #FFD02C -20%, #FF912C 80%',
                  '@sm': { fs: '$xl5' },
                }}
              >
                Видеонаблюдение на транспорте
              </Text>
            </div>
          </Card.Header>
          <Card.Body>
            <Text
              size="$md"
              css={{ '@sm': { fs: '$xl2' }, textAlign: 'center' }}
            >
              Благодаря современному оборудованию можно постоянно следить за
              пассажирским и грузовым транспортом, контролируя его перемещение.
              Заказав установку и настройку оборудования, вы сможете в режиме
              реального времени отслеживать транспорт и контролировать его
              состояние на всей протяженности маршрута. Это поможет
              предотвратить неприятные ситуации, сохранить груз и обеспечить
              безопасность при перевозке пассажиров.
            </Text>
          </Card.Body>
          <Card.Footer css={{ justifyContent: 'center' }}>
            <Button bordered auto onClick={handleClickAction}>
              Установить
            </Button>
          </Card.Footer>
        </Card>
      </motion.div>
    </Container>
  )
}
