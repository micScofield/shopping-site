import PropTypes from 'prop-types';

import 'components/card/card.styles.scss';

const Card = ({ cardData }) => {
  let { imageUrl, footer, overlay: { title, subText } } = cardData;

  // todo : A size prop for image setting height dynamically eg: medium, large

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

        {footer && (
          <div className='footer'>
            <span className='value1'>{footer.value1}</span>
            <span className='value2'>{footer.value2}</span>
          </div>
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    imageUrl: PropTypes.string,
    footer: PropTypes.object,
    overlay: PropTypes.object
  }),
};

export default Card;
