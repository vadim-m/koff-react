import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { useState } from 'react';
import style from './ProductSlider.module.scss';
import 'swiper/css';

export const ProductSlider = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={style.picture}>
      <div className={style.sliderMain}>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          spaceBetween={20}
          slidesPerView={'auto'}
        >
          <SwiperSlide>
            <div className={style.wrapper}>
              <img src="/img/product.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.wrapper}>
              <img src="/img/product.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.wrapper}>
              <img src="/img/1.jpg" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.wrapper}>
              <img src="/img/i.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.wrapper}>
              <img src="/img/i.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <button
            className={`${style.arrow} ${style.arrow_prev}`}
            onClick={() => mainSwiper.slidePrev()}
          >
            &#60;
          </button>
          <button
            className={`${style.arrow} ${style.arrow_next}`}
            onClick={() => mainSwiper.slideNext()}
          >
            &#62;
          </button>
        </Swiper>
      </div>
      <div className={style.sliderThumbnails}>
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={14}
          slidesPerView={4}
          watchSlidesProgress
        >
          <SwiperSlide>
            <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
              <img src="/img/product.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
              <img src="/img/product.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
              <img src="/img/1.jpg" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
              <img src="/img/i.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
              <img src="/img/i.webp" alt="photo" className={style.img} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
