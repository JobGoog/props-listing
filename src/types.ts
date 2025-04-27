export interface MainImage {
    url_570xN: string;
  }
  
  export interface Offer {
    listing_id: number;
    state: string;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
    url?: string;
    MainImage?: MainImage;
  }
  