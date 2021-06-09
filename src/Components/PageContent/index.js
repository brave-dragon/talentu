import React from 'react';
import Card from '../Card';
import CardWithAvatar from '../CardWithAvatar';
import PageControlBar from './PageControlBar';
import './style.scss'

function PageContent () {
  return (
    <div className="page-container">
      <PageControlBar />
      <Card />
      <CardWithAvatar candidate="15" people="3" views="1,356"/>
      <CardWithAvatar candidate="26" people="4" views="856"/>
      <CardWithAvatar candidate="9" people="5" views="943"/>
      <CardWithAvatar candidate="13" people="4" views="1489"/>
    </div>
  )
}

export default PageContent;