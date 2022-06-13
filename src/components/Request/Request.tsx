import React from 'react'
import { Grid, Text, Input, Col, Button, Row, Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'
import RequestContainer from 'components/Request/RequestContainer'
import RequestTitle from 'components/Request/RequestTitle'
import { animConfig } from 'config/animConfig'

export default function Request() {
  return (
    <motion.div {...animConfig.title}>
      <RequestContainer>
        <Grid xs={12} md={6}>
          <RequestTitle text="Давайте работать вместе" />
        </Grid>
        <Grid xs={12} md={6}>
          <Col>
            <Input
              id="form-name"
              fullWidth
              size="xl"
              color="default"
              status="warning"
              labelLeft="Имя"
              placeholder="Вин Дизель"
              aria-label="Имя"
            />
            <Spacer y={2} />
            <Input
              id="form-tel"
              fullWidth
              size="xl"
              color="default"
              status="warning"
              labelLeft="Телефон"
              placeholder="+7 (999) 999-99-99"
              aria-label="Телефон"
            />
            <Spacer y={2} />
            <Row
              css={{ flexDirection: 'column', '@xl': { flexDirection: 'row' } }}
            >
              <Button size="xl" auto css={{ bg: '$white' }}>
                Отправить заявку
              </Button>
              <Spacer x={2} />
              <Text size="$md" color="$gray100">
                Персональный менеджер перезвонит вам в течение 15 минут
              </Text>
            </Row>
          </Col>
        </Grid>
      </RequestContainer>
    </motion.div>
  )
}
