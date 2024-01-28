import { FC, useRef } from "react"

import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type SwiperCore from "swiper"

import data from "../../data/page-content.json"
import ImageBanner1 from "../../assets/images/home/home-slide-1.jpg"
import ImageBanner2 from "../../assets/images/home/home-slide-2.jpg"
import ImageBanner3 from "../../assets/images/home/home-slide-3.jpg"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import "./MainBanner.styles.scss"

const MainBanner: FC = () => {
  const swiperRef = useRef<SwiperCore>()
  const imageBanners = [
    ImageBanner2,
    ImageBanner3
  ]

  return (
    <Swiper
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      className="banner"
      modules={[Autoplay, Pagination]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      pagination={{
        el: ".swiper-pagination-custom",
        clickable: true
      }}
      slidesPerView="auto"
    >
      <div className="container swiper-pagination-custom" />
      {data.main_banner.map((banner, index) => (
        <SwiperSlide className="bannerSlide" key={`image-${index + 1}`}>
          {index === 0 ? (
            <img
              alt="Banner 1"
              className="bannerImage"
              height={363}
              src={ImageBanner1}
              width={320}
              loading="eager"
            />
          ) : (
            <img
              alt={`Banner ${index + 1}`}
              className="bannerImage"
              height={363}
              src={imageBanners[index % imageBanners.length]}
              width={320}
              loading="lazy"
            />
          )}
          <div className="container">
            <div className="bannerText">
              <p>{banner.bannerText}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <span
        className="swiper-pagination-bullet swiper-pagination-bullet-active"
        style={{ display: "hidden" }}
      />
    </Swiper>
  )
}

export default MainBanner
