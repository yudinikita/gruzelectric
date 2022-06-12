import React from 'react'
import { styled } from '@nextui-org/react'

const MapContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  '@md': {
    '&::before': {
      content: ` `,
      display: 'block',
      height: '100%',
      left: '0',
      minWidth: '100%',
      width: '100%',
      translate: 'translateX(-50%)',
      boxShadow: '0 0 calc(min(17vw, 100px)) calc(min(15vw, 100px)) #000 inset',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 5,
    },
  },
})

export default function Map() {
  return (
    <MapContainer css={{ mh: '90vh' }}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d9a3ec450bb2918564f2bbf666f66214f005880dc024507f9133d0b297edc09&amp;source=constructor"
        width="100%"
        height="960"
      ></iframe>
    </MapContainer>
  )
}
