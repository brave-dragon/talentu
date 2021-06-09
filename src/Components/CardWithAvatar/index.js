import React from 'react';
import {ReactComponent as Add} from '../../assets/images/add.svg'
import {ReactComponent as Eye} from '../../assets/images/eye.svg'
import {ReactComponent as Chart} from '../../assets/images/chart.svg'
import {ReactComponent as Toggle} from '../../assets/images/toggle.svg'
import {ReactComponent as Dots} from '../../assets/images/dots.svg'
import personImg from'../../assets/images/person.png';
import './style.scss'

function Card (props) {
  return (
    <div className="row-card">
      <div className="card-title">
        <span className="primary-title">Motorista</span>
        <span className="secondary-title">San Salvador</span>
      </div>
      <div className="card-info-avatar-wrapper">
        <div className="card-info">
          <div><span>{props.candidate}</span><span>Candidatos activos</span></div>
        </div>
        <div className="avatar-list">
          <img  src={personImg} className="avatar" alt="Person Image"/>
          <img  src={personImg} className="avatar-2" alt="Person Image"/>
          <img  src={personImg} className="avatar-3" alt="Person Image"/>
          <span className="people">{props.people == 3 ? '' : `+${props.people - 3}`}</span>
          <Add />
        </div>
        <div className="views">
          <Eye />
          <span>{props.views}</span>
        </div>
        <div className="card-buttons-avatar">
          <div className="chart-wrapper">
            <Chart />
          </div>
          <Toggle />
          <Dots />
        </div>
      </div>
    </div>
  )
}

export default Card;