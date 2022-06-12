import React from 'react'
import { Modal, Button, Input, Text } from '@nextui-org/react'

interface ModalFeedbackProps {
  visible: boolean
  closeHandler: () => void
}

export default function ModalFeedback({
  visible,
  closeHandler,
}: ModalFeedbackProps) {
  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text>Оставить отзыв</Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="ФИО и профессия"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Сообщение"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
