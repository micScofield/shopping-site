import PropTypes from 'prop-types';

import 'components/card/card.styles.scss';

/*
Overlay supports upto 2 values
*/

const Card = ({ cardData }) => {
  let { imageUrl, footer, overlay, overlayPosition } = cardData;

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

        {overlay && (
          <div className={`card-body-container ${overlay.length > 1 ? '' : 'small'} ${overlayPosition === 'bottom' ? 'bottom' : ''}`}>
            {overlay[0] && <h2>{overlay[0]}</h2>}
            {overlay[1] && <p>{overlay[0]}</p>}
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
    overlay: PropTypes.arrayOf(PropTypes.string), 
  }),
};

export default Card;
