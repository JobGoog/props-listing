import PropTypes from 'prop-types';
import Item from './Item';

export default function Listing({ items = [] }) {

  const active = items.filter((o) => o.state === 'active');

  if (!active.length) return null;

  return (
    <div className="item-list">
      {active.map((offer) => (
        <Item key={offer.listing_id} data={offer} />
      ))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
