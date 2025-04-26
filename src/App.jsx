import React from 'react';
import Listing from './Listing';
import data from './data.json';

export default function App() {
    return <Listing items={data} />;
}
