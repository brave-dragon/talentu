import React from 'react';
import {ReactComponent as Compass} from '../../assets/images/compass.svg';
import {ReactComponent as Business} from '../../assets/images/business.svg';
import {ReactComponent as Graph} from '../../assets/images/graph.svg';
import {ReactComponent as News} from '../../assets/images/news.svg';
import {ReactComponent as People} from '../../assets/images/people.svg';
import {ReactComponent as Calendar} from '../../assets/images/calendar.svg';
import {ReactComponent as Chat} from '../../assets/images/chat.svg';
import {ReactComponent as Coins} from '../../assets/images/coins.svg';
import './style.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">talentu</div>
      <div className="menu-wrapper">
        <div>
          <div className="menu-item">
            <Compass />
            <span>Explorar</span>
          </div>
          <div className="menu-item">
            <Business />
            <span>Mis Trabajos</span>
          </div>
          <div className="menu-item">
            <Graph />
            <span>Analíticas</span>
          </div>
          <div className="menu-item">
            <News />
            <span>Social</span>
          </div>
          <div className="menu-item">
            <People />
            <span>Mi Equipo</span>
          </div>
          <div className="menu-item">
            <Calendar />
            <span>Calendario</span>
          </div>
          <div className="menu-item">
            <Chat />
            <span>Chat</span>
          </div>
        </div>
        <div>
          <div className="bottom-item">
            <Coins />
            <span>Tokens</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar