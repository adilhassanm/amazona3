//create objects to return sample products
//define data as a objet,add four products,each product is an  object,properties name of product and second product is slug,category
//so likewise will create product as object with its properties

const data = {
  products: [
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Adidas Fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant',
    },
    {
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant',
    },
    {
      name: 'How Innovation Works',
      slug: 'how-innovation-works',
      category: 'Books',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: '4th Estate',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant',
    },
  ],
};
export default data;
