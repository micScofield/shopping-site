import PropTypes from 'prop-types';

import 'components/card/card.styles.scss';
import { Fragment } from 'react';

const Card = ({ cardData }) => {
  let { imageUrl, title, subText, footer } = cardData;

  // footer = {
  //   value1: 'test',
  //   value2: 'test',
  // };

  return (
    <>
      <div className='card-wrapper'>
        {imageUrl && (
          <div
            className='background-image'
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        )}
        {(title || subText) && (
          <div className='card-body-container'>
            {title && <h2>{title}</h2>}
            {subText && <p>{subText}</p>}
          </div>
        )}
      </div>
      {footer && (
        <div className='footer'>
          <span className='value1'>{footer.value1}</span>
          <span className='value2'>{footer.value2}</span>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subText: PropTypes.string,
  }),
};

export default Card;
