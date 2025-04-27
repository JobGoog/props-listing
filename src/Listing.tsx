import { FC } from 'react';
import { Offer } from './types';
import ItemCard from './ItemCard';

interface ListingProps {
  items: Offer[];
}

const Listing: FC<ListingProps> = ({ items }) => {
  const active = items.filter((o) => o.state === 'active');

  if (!active.length) return null;

  return (
    <ul className="item-list">
      {active.map((offer) => (
        <li key={offer.listing_id} className="item">
          <ItemCard data={offer} />
        </li>
      ))}
    </ul>
  );
};
  
export default Listing;

