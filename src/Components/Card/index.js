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
      {
        !props.avatar &&
        (
          <React.Fragment>
            <div className="card-title">
              <span className="primary-title">Motorista</span>
              <span className="secondary-title">San Salvador</span>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div><span className="blue">63</span><span>Candidatos activos</span></div>
                <div><span>45</span><span>Stand-by</span></div>
                <div><span>5</span><span>Considerados</span></div>
                <div><span>5</span><span>Entrevistando</span></div>
                <div><span>5</span><span>Rechazados</span></div>
              </div>
              <div className="card-buttons">
                <div className="chart-wrapper">
                  <Chart />
                </div>
                <Toggle />
                <Dots />
              </div>
            </div>
          </React.Fragment>
        )
      }
      {
        props.avatar &&
        (
          <React.Fragment>
            <div className="card-title">
              <span className="primary-title">Motorista</span>
              <span className="secondary-title">San Salvador</span>
            </div>
            <div className="card-info-avatar-wrapper">
              <div className="card-info">
                <div><span>63</span><span>Candidatos activos</span></div>
              </div>
              <div className="avatar-list">
                <img  src={personImg} className="avatar" alt="Person Image"/>
                <img  src={personImg} className="avatar-2" alt="Person Image"/>
                <img  src={personImg} className="avatar-3" alt="Person Image"/>
                <Add />
              </div>
              <div className="views">
                <Eye />
                <span>1,659</span>
              </div>
              <div className="card-buttons-avatar">
                <div className="chart-wrapper">
                  <Chart />
                </div>
                <Toggle />
                <Dots />
              </div>
            </div>
          </React.Fragment>
        )
      }
    </div>
  )
}

export default Card;