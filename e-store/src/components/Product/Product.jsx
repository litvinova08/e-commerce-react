

const Product = ({product}) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.quantity}</p>
      <img src={product.img} alt="img"/>
    </div>
  )
}

export default Product