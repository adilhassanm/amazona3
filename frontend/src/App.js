import { Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; //import browserrouter as named import

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
          {/* a is anchor to root of application with / */}
        </header>
        <main>
          <Routes>
            <Route path="/produc/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
