import React, { useState } from 'react'
import Logo from 'components/Logo/Logo'
import MenuLinks from 'components/Menu/MenuLinks/MenuLinks'
import NavBarContainer from 'components/NavBar/NavBarContainer'
import MenuTel from 'components/Menu/MenuTel'
import MenuButton from 'components/Menu/MenuButton'
import MenuToggle from 'components/Menu/MenuToggle'
import MobileMenuContainer from 'components/Menu/MobileMenuContainer'
import MobileBackgroundMenu from 'components/Menu/MobileBackgroundMenu'
import menuLinks from 'data/menuLinks'
import contacts from 'data/contacts'
import MenuSpacer from 'components/Menu/MenuSpacer'
import ModalCallback from 'components/ModalCallback/ModalCallback'

export default function NavBar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)

  const toggleMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu)

  const openModalHandler = () => setModalVisible(true)
  const closeModalHandler = () => setModalVisible(false)

  return (
    <NavBarContainer>
      <Logo />
      <ModalCallback visible={modalVisible} closeHandler={closeModalHandler} />
      <MenuToggle toggle={toggleMobileMenu} isOpen={isOpenMobileMenu} />
      <MobileMenuContainer open={isOpenMobileMenu}>
        <MenuLinks links={menuLinks} />
        <MenuSpacer x={3} />
        <MenuTel title={contacts.tel.title} href={contacts.tel.href} />
        <MenuTel title={'+7 953 739-74-82'} href={'89537397482'} />
        <MenuSpacer x={3} />
        <MenuButton
          title={contacts.buttonAction.title}
          onClick={openModalHandler}
        />
      </MobileMenuContainer>
      <MobileBackgroundMenu
        open={isOpenMobileMenu}
        onClick={toggleMobileMenu}
      />
    </NavBarContainer>
  )
}
