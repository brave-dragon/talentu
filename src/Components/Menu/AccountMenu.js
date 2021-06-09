import React from 'react';
import {ReactComponent as Menu} from '../../assets/images/menu.svg'
import personImg from'../../assets/images/person.png';
import './account_menu.scss'

function AccountMenu() {
  return (
    <div className="account-menu">
      <Menu />
      <img src={personImg} className="" alt="Person"/>
    </div>
  )
}

export default AccountMenu;