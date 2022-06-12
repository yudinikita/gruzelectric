import React from 'react'
import NextLink from 'next/link'
import { Image, styled } from '@nextui-org/react'

const LogoImage = styled(Image, {
  width: '50vw !important',
  zIndex: '501',
  '@md': {
    width: '275px !important',
    '& > img': {
      width: '275px !important',
    },
  },
})

export default function Logo() {
  return (
    <div>
      <NextLink href="/">
        <a>
          <LogoImage
            width={275}
            height={69}
            src="static/images/logo.svg"
            alt="Логотип Грузового Автоэлектрика"
            autoResize
          />
        </a>
      </NextLink>
    </div>
  )
}
