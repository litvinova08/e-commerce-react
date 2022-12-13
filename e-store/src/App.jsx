import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import ProductList from './containers/ProductList/ProductList';
import { getAllProducts } from './services/store';

function App() {

  //usestae to get the list of all products
  const [products, setProducts] = useState([]);


  //use Effect because product cards should be rendered when the page is opened the first time
  useEffect(() => {
    const wrapper = async() =>{
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    wrapper();
  }, [])


  return (
    <div className="App">
      <ProductList products={products}/>
    </div>
  )
}

export default App
