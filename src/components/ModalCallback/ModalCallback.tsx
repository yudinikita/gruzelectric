import React from 'react'
import { Modal, Button, Input, Text } from '@nextui-org/react'

interface ModalCallbackProps {
  visible: boolean
  closeHandler: () => void
}

export default function ModalCallback({
  visible,
  closeHandler,
}: ModalCallbackProps) {
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
          <Text>Заказать звонок</Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Имя"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Телефон"
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
