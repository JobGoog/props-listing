import PropTypes from 'prop-types';

export default function Item({ data }) {
  
  if (!data?.MainImage?.url_570xN) return null;

  const {
    url,
    MainImage,
    title = 'No title',
    currency_code: code,
    price,
    quantity = 0
  } = data;


  const trimmedTitle =
    title.length > 50 ? `${title.slice(0, 50)}…` : title;


  let displayPrice = `${price} ${code}`;
  if (code === 'USD') displayPrice = `$${price}`;
  if (code === 'EUR') displayPrice = `€${price}`;


  const level =
    quantity <= 10 ? 'level-low' :
    quantity <= 20 ? 'level-medium' :
    'level-high';

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>

      <div className="item-details">
        <p className="item-title">{trimmedTitle}</p>
        <p className="item-price">{displayPrice}</p>
        <p className={`item-quantity ${level}`}>{quantity} left</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    listing_id: PropTypes.number,
    state: PropTypes.string,
    url: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string
    }),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  }).isRequired
};
