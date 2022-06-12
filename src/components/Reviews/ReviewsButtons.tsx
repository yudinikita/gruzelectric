import React from 'react'
import { Button, Container } from '@nextui-org/react'

interface ReviewsButtonsProps {
  handleFeedback?: React.MouseEventHandler<HTMLButtonElement>
  handleMore?: React.MouseEventHandler<HTMLButtonElement>
}

export default function ReviewsButtons({
  handleFeedback,
  handleMore,
}: ReviewsButtonsProps) {
  return (
    <Container fluid display="flex" justify="center">
      <Button.Group size="lg">
        <Button
          onClick={handleFeedback}
          css={{ fs: '4vw', '@sm': { fs: '$xl1' } }}
        >
          Написать отзыв
        </Button>
        <Button
          ghost
          onClick={handleMore}
          css={{ fs: '4vw', '@sm': { fs: '$xl1' } }}
        >
          Показать еще
        </Button>
      </Button.Group>
    </Container>
  )
}
