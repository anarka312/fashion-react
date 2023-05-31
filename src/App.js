import Arrivals from './components/arrivals/arrivals';
import Brands from './components/brands/brands';
import Card from './components/card/card';
import Header from './components/header/header'
import Promo from './components/promo/promo';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Promo />
      <Brands />
      <Arrivals />
      <Card />
    </div>
  );
}

export default App;
