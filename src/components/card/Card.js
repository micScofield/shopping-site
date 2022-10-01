import PropTypes from 'prop-types';

import 'components/card/card.styles.scss';

const Card = ({ cardData }) => {
  const { imageUrl, title, subText } = cardData;
  return (
    <div className='card-wrapper'>
      {imageUrl && (
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}
      <div className='card-body-container'>
        {title && <h2>{title}</h2>}
        {subText && <p>{subText}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subText: PropTypes.string,
  })
};

export default Card;
