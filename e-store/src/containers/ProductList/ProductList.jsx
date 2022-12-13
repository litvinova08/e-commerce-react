import Product from "../../components/Product/Product";

const ProductList = ({products}) => {
  return (
    <div>
        {
          products.map(product => {
            return (<Product key={product.id} product={product}/>)
          })
        }
    </div>
  )
}

export default ProductList;