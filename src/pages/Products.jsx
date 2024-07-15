import React , {useState  , useEffect , useContext } from 'react'
import styles from  '../styles/Products.module.css'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../ShoppingCartContext";

const Products = () => {
  const [products  ,  setProducts ]  =  useState([])   ; 
  useEffect(
    () => {
        fetch('/products.json') 
        .then(response  => response.json())
        .then(data => setProducts(data))  
        .catch(error => console.error('Error:', error))   ;  // Error handling 

    } ,   []    
    // [] means this effect will only run once on component mount
    

  )

  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1> Products </h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}> View Details </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products