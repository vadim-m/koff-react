import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { API_URL } from '../../constants/constants';
import style from './ProductSlider.module.scss';
import 'swiper/css';

export const ProductSlider = ({ images, name }) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onProgress = () => {
    if (!mainSwiper) return;
    if (mainSwiper.isEnd) {
      setIsEnd(true);
      setIsBeginning(false);
    } else if (mainSwiper.isBeginning) {
      setIsBeginning(true);
      setIsEnd(false);
    } else {
      setIsEnd(false);
      setIsBeginning(false);
    }
  };

  return (
    <div className={style.picture}>
      <div className={style.sliderMain}>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          onProgress={onProgress}
          spaceBetween={20}
          slidesPerView={'auto'}
        >
          {images?.length &&
            images.map((src) => (
              <SwiperSlide key={`sw1-${src.slice(6, -4)}`}>
                <div className={style.wrapper}>
                  <img className={style.img} src={`${API_URL}/${src}`} alt={name} />
                </div>
              </SwiperSlide>
            ))}
          <button
            disabled={isBeginning}
            className={`${style.arrow} ${style.arrow_prev}`}
            onClick={() => mainSwiper.slidePrev()}
          >
            &#60;
          </button>
          <button
            disabled={isEnd}
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
          {images?.length &&
            images.map((src) => (
              <SwiperSlide key={`sw2-${src.slice(6, -4)}`}>
                <div className={`${style.wrapper} ${style.wrapper_thumbs}`}>
                  <img className={style.img} src={`${API_URL}/${src}`} alt={name} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
