import Listing from './Listing';
import data from './data.json';
import { Offer } from './types';

function App() {
  const items = data as unknown as Offer[];

  return <Listing items={items} />;
}

export default App;
