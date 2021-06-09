import React from 'react';
import {ReactComponent as Sort} from '../../assets/images/sort.svg'
import {ReactComponent as Export} from '../../assets/images/export.svg'
import './page_control_bar.scss'

function PageControlBar () {
  return (
    <div className="control-bar-wrapper">
      <div className="page-info">
        <div><span className="page-title">Mis Trabajos</span></div>
        <div className="select-item"><span className="blue">Todas</span><div className="counter counter-active">6</div></div>
        <div className="select-item"><span>Públicas</span><div className="counter">2</div></div>
        <div className="select-item"><span>Privadas</span><div className="counter">2</div></div>
        <div className="select-item"><span>Completadas</span><div className="counter">2</div></div>
      </div>
      <div className="page-into-button-group">
        <Sort />
        <div className="export-button">
          <Export />
          <span>Exportar</span>
        </div>
      </div>
    </div>
  )
}

export default PageControlBar;