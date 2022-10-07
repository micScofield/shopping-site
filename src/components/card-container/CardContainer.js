import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card';
import 'components/card-container/card-container.styles.scss';

function CardContainer({ title, cards, grid, large }) {
  // determine class
  let cardContainerClassName = grid
    ? 'card-container-grid'
    : 'card-container-flex';

  return (
    <>
      { title && <h2>{title}</h2> }
      <div className={cardContainerClassName}>
        {cards.length !== 0 &&
          cards.map((card) => <Card key={card.id} cardData={card} large={large} />)}
      </div>
    </>
  );
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  grid: PropTypes.bool,
  large: PropTypes.bool
};

export default CardContainer;
