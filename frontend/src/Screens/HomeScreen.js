import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/* this div is for wrappin jsx for styling,by using className*/}
        {data.products.map((produc) => (
          <div className="produc" key={produc.slug}>
            {/* by using className here abovefor styling*/}
            <Link to={`/produc/${produc.slug}`}>
              <img src={produc.image} alt={produc.name} />
            </Link>
            <div className="produc-info">
              {/* this div for organising the product info under the image*/}
              <Link to={`/produc/${produc.slug}`}>
                <p>{produc.name}</p>
              </Link>
              <p>
                <strong>AED {produc.price}</strong>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
