import React from "react";
import ProductList from "../ProductList/ProductList";
import Carousel from "../Carousel/Carousel";

const HomePage = ({ products }) => {
	return (
		<div>
			<h1>Enjoy!</h1>
			<Carousel products={products} />
		</div>
	);
};

export default HomePage;
