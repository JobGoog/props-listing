import { FC } from 'react';
import { Offer } from './types';

interface ItemCardProps {
  data: Offer;
}

const ItemCard: FC<ItemCardProps> = ({ data }) => {

    if (!data?.MainImage?.url_570xN) return null;

    const {
        url = '#',
        MainImage,
        title = 'No title',
        currency_code = '',
        price = '',
        quantity = 0
    } = data;


    const viewTitle = title.length > 50 ? `${title.slice(0, 50)}…` : title;

    const viewPrice =
        currency_code === 'USD'
            ? `$${price}`
            : currency_code === 'EUR'
            ? `€${price}`
            : `${price} ${currency_code}`;

    const level =
        quantity <= 10 ? 'level-low' : quantity <= 20 ? 'level-medium' : 'level-high';

    return (
        <>
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title} />
                </a>
            </div>

            <div className="item-details">
                <p className="item-title">{viewTitle}</p>
                <p className="item-price">{viewPrice}</p>
                <p className={`item-quantity ${level}`}>{quantity} left</p>
            </div>
        </>
    );
};

export default ItemCard;
