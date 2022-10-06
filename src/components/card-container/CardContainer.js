import React from 'react'
import PropTypes from 'prop-types';

import Card from 'components/card/Card';
import 'components/card-container/card-container.styles.scss'

function CardContainer({cards}) {
  return (
    <div className='card-container-flex'>
      {cards.length !== 0 && cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardContainer