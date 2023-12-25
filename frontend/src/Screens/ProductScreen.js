import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams(); //USEPARAM IS A HOOK
  const { slug } = params; //const slug = params.slug; is the conventional way of writing
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
