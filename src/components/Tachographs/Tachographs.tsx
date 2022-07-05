import React, { MouseEventHandler } from 'react'
import { Card, Container, Text, Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { animConfig } from 'config/animConfig'

export default function Tachographs() {
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
          <Card.Header>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text
                size="8vw"
                weight="bold"
                css={{
                  textGradient: '45deg, #FFD02C -20%, #FF912C 80%',
                  '@sm': { fs: '$xl6' },
                }}
              >
                Установка тахографов
              </Text>
            </div>
          </Card.Header>
          <Card.Body>
            <Text size="$md" css={{ '@sm': { fs: '$xl2' } }}>
              Наши специалисты готовы установить тахографы на грузовые
              автомобили различных типов (грузовики, самосвалы, тягачи), на
              микроавтобусы и автобусы большой вместимости, на специальную
              технику, оснащенную кранами-манипуляторами, а также
              предназначенную для перевозки опасных грузов.
            </Text>
          </Card.Body>
          <Card.Footer>
            <Button bordered auto onClick={handleClickAction}>
              Установить
            </Button>
          </Card.Footer>
        </Card>
      </motion.div>
    </Container>
  )
}
