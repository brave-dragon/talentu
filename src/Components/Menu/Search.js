import React from 'react';
import searchImg from'../../assets/images/search.png';
import './search.scss'

function Search() {
  return (
    <div className="search-box">
      <img  src={searchImg} className="" alt="Search Image"/>
      <input className="search-input" type="text" placeholder="Busca candidatos, servicios, eventos, etc."/>
    </div>
  )
}

export default Search;