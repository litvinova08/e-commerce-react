import React from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Product from "../../components/Product/Product.jsx";
import styles from "./Carousel.module.scss";

const Carousel = ({ products }) => {
	return (
		<CarouselProvider
			naturalSlideWidth={30}
			naturalSlideHeight={50}
			totalSlides={3}
			className={styles.Carousel}
		>
			{/* present in carousel if a product favourite value is TRUE */}
			<Slider className={styles.Carousel}>
				{products.map((product, i) => {
					if (product.favourite) {
						return (
							<Slide index={i} key={product.id}>
								<Product product={product} />
							</Slide>
						);
					}
				})}
			</Slider>
			<ButtonBack className={styles.Button}>Back</ButtonBack>
			<ButtonNext>Next</ButtonNext>
		</CarouselProvider>
	);
};

export default Carousel;
