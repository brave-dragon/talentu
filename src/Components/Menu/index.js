import React from 'react';
import ButtonGroup from './ButtonGroup';
import Search from './Search';
import './style.scss'

function Menu() {
  return (
    <div className="menu-bar">
      <Search />
      <ButtonGroup />
    </div>
  )
}

export default Menu;