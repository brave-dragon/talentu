import React from 'react';
import {ReactComponent as Bookmark} from '../../assets/images/bookmark.svg'
import {ReactComponent as Notification} from '../../assets/images/notification.svg'
import AccountMenu from './AccountMenu';
import './button_group.scss'

function ButtonGroup() {
  return (
    <div className="button-group">
      <div className="radius-button">Crear Trabajo</div>
      <Bookmark />
      <div className="notification">
        <Notification />
        <div className="badge">1</div>
      </div>
      <AccountMenu />
    </div>
  )
}

export default ButtonGroup;