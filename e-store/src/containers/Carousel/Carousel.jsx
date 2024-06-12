import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselProduct from "../../components/CarouselProduct/CarouselProduct.jsx";
import styles from "./Carousel.module.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";

const Carousel = () => {
  const { products1 } = useContext(ProductContext);

  return (
    <CarouselProvider
      naturalSlideWidth={30}
      naturalSlideHeight={50}
      totalSlides={3}
      className={styles.Carousel}
    >
      {/* present in carousel if a product favourite value is TRUE */}
      <Slider className={styles.Carousel}>
        {products1.map((product, i) => {
          if (product.favourite) {
            return (
              <Slide className={styles.Slide} index={i} key={product.id}>
                <CarouselProduct product={product} />
              </Slide>
            );
          }
        })}
      </Slider>
      <ButtonBack className={styles.Button}>Back</ButtonBack>
      <ButtonNext className={styles.Button}>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
