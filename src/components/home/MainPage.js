import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";

export default function MainPage() {
  const [color, setColor] = useState("#FFFFFF");

  const slides = [
    {id:1, color:"#373737", src:"https://image.univstore.com/20250314_hp_intel_ccf_brandweek_373737_web_maintop.png"},
    {id:2, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
    {id:3, color:"#e5d0dd", src:"https://image.univstore.com/20250122_lg_gram_pro_launching_e5d0dd_web_maintop.png"},
    {id:4, color:"#e0f1f7", src:"https://image.univstore.com/20250210_samsung_galaxybook5_intel_lunarlake_58524_web_maintop.jpg"},
    {id:5, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_ipadair_m3_announce_web_maintop.jpg"},
    {id:6, color:"#ccc9b9", src:"https://image.univstore.com/20250317_perfumehub_brandweek_web_maintop_CCC9B9.png"},
    {id:7, color:"#6585f7", src:"https://image.univstore.com/20250108_samsung_galaxytab_academy_58240_6584f5_web_maintop.png"},
    {id:8, color:"#626d77", src:"https://image.univstore.com/20240708_hp_AI_week_web_maintop_626D77.png"},
    {id:9, color:"#87cbfc", src:"https://image.univstore.com/20250317_everyuneez_finedust_web_maintop_92D3FF.png"},
    {id:10, color:"#dae7e9", src:"https://image.univstore.com/20250211_samsung_tabphone_web_maintop.png"},
    {id:11, color:"#faf0f0", src:"https://image.univstore.com/20250317_bose_brandweek_faf0f0_web_maintop.png"},
    {id:12, color:"#ffb4c2", src:"https://image.univstore.com/20250211_everyuneez_review_event_web_maintop_FFB4C2.png"},
    {id:13, color:"#f6ffbe", src:"https://image.univstore.com/20250301_everyuneez_everybeauty_web_maintop_F7FFBE.png"},
    {id:14, color:"#fffbd1", src:"https://image.univstore.com/20240429_univ_camera_promotion_fffbd1_web_maintop.png"},
    {id:15, color:"#373737", src:"https://image.univstore.com/20250314_hp_intel_ccf_brandweek_373737_web_maintop.png"},
    {id:16, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
  ]

  function slideChange (swiper) {
    let curSlide = swiper.slides[swiper.activeIndex];
    let e = curSlide.querySelector("a");
    let c = e.getAttribute("data-backgroundcolor");
    setColor(c);
  }
  return (
    <MainPageLayout className="MainPage">
      <MainBanner className="MainBanner" style={{backgroundColor:color}}>
        <Carousel className="Carousel">
          <CarouselInner className="CarouselInner">
            <StyledSwiper
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
              }}
              loop={true}
              slidesPerView={1}
              modules={[Navigation, Pagination, Autoplay]}
              navigation = {{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={slideChange}
            >
              {slides.map((slide)=>{
                return <SwiperSlide key={slide.id}><a href="#!" data-backgroundcolor={slide.color}><img src={slide.src} alt="slide"></img></a></SwiperSlide>
              })}
              <div className='swiper-button-prev' style={{
                backgroundImage: `url("https://www.univstore.com/image/ic-arrow-forward-black.png")`,
                left: 0,
                transform: `rotate(180deg)`,
                backgroundSize: "24px",
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                top: 0,
                width: "48px",
                height: "100%",
                backgroundPositionX: "16px",
                right: "auto",
                position: "absolute"
              }}>
              </div>
              <div className='swiper-button-next' style={{
                backgroundImage: `url("https://www.univstore.com/image/ic-arrow-forward-black.png")`,
                right: 0,
                backgroundSize: "24px",
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                top: 0,
                width: "48px",
                height: "100%",
                backgroundPositionX: "16px",
                left: "auto",
                position: "absolute"
              }}>
              </div>
            </StyledSwiper>
          </CarouselInner>
        </Carousel>
      </MainBanner>
    </MainPageLayout>
  );
}

const MainPageLayout = styled.main`
  min-height: 616.734px;
`;

const MainBanner = styled.div`
  transition: background-color linear 300ms;
`;

const Carousel = styled.div`
  position: relative;
  margin: 0 auto;

  width: 80.625%;
  max-width: 1032px;
`;

const CarouselInner = styled.div`
  padding-top: 50%;
`;

const StyledSwiper = styled(Swiper)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;