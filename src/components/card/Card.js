import PropTypes from 'prop-types';

import 'components/card/card.styles.scss';

/*
Overlay supports upto 2 values
*/

const Card = ({ cardData, large }) => {
  let {
    imageUrl,
    footer,
    overlay,
    overlayPosition,
    onOverlayClick,
    showOverlayByDefault,
  } = cardData;

  if (!onOverlayClick) {
    onOverlayClick = () => {};
  }

  // Determining CSS classes for card container
  let cardContainerCssClasses = [];
  if (showOverlayByDefault)
    cardContainerCssClasses.push('card-body-container-with-overlay');
  else cardContainerCssClasses.push('card-body-container-without-overlay');
  if (overlay.length < 2) cardContainerCssClasses.push('small');
  if (overlayPosition === 'bottom') cardContainerCssClasses.push('bottom');

  return (
    <>
      <div className={`card-wrapper ${large ? 'large' : ''}`}>
        {imageUrl && (
          <div
            className='background-image'
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        )}

        {overlay && (
          <div
            className={cardContainerCssClasses.join(' ')}
            onClick={(e) => onOverlayClick(e, cardData)}
          >
            {overlay[0] && <h2>{overlay[0]}</h2>}
            {overlay[1] && <p>{overlay[1]}</p>}
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
    footer: PropTypes.shape({
      value1: PropTypes.string,
      value2: PropTypes.string,
    }),
    overlay: PropTypes.arrayOf(PropTypes.string),
    overlayPosition: PropTypes.string,
    showOverlayByDefault: PropTypes.bool,
  }),
  large: PropTypes.bool,
};

export default Card;
