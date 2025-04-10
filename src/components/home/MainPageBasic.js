import { useState } from "react";
import styled from "styled-components";

export default function MainPageBasic() {
  const [color, setColor] = useState("#FFFFFF");
  const [index, setIndex] = useState(0);

  const Slides = [
    {idx:0, color:"#373737", src:"https://image.univstore.com/20250314_hp_intel_ccf_brandweek_373737_web_maintop.png"},
    {idx:1, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
    {idx:2, color:"#e5d0dd", src:"https://image.univstore.com/20250122_lg_gram_pro_launching_e5d0dd_web_maintop.png"},
    {idx:3, color:"#e0f1f7", src:"https://image.univstore.com/20250210_samsung_galaxybook5_intel_lunarlake_58524_web_maintop.jpg"},
    {idx:4, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_ipadair_m3_announce_web_maintop.jpg"},
    {idx:5, color:"#ccc9b9", src:"https://image.univstore.com/20250317_perfumehub_brandweek_web_maintop_CCC9B9.png"},
    {idx:6, color:"#6585f7", src:"https://image.univstore.com/20250108_samsung_galaxytab_academy_58240_6584f5_web_maintop.png"},
    {idx:7, color:"#626d77", src:"https://image.univstore.com/20240708_hp_AI_week_web_maintop_626D77.png"},
    {idx:8, color:"#87cbfc", src:"https://image.univstore.com/20250317_everyuneez_finedust_web_maintop_92D3FF.png"},
    {idx:9, color:"#dae7e9", src:"https://image.univstore.com/20250211_samsung_tabphone_web_maintop.png"},
    {idx:10, color:"#faf0f0", src:"https://image.univstore.com/20250317_bose_brandweek_faf0f0_web_maintop.png"},
    {idx:11, color:"#ffb4c2", src:"https://image.univstore.com/20250211_everyuneez_review_event_web_maintop_FFB4C2.png"},
    {idx:12, color:"#f6ffbe", src:"https://image.univstore.com/20250301_everyuneez_everybeauty_web_maintop_F7FFBE.png"},
    {idx:13, color:"#fffbd1", src:"https://image.univstore.com/20240429_univ_camera_promotion_fffbd1_web_maintop.png"},
    {idx:14, color:"#373737", src:"https://image.univstore.com/20250314_hp_intel_ccf_brandweek_373737_web_maintop.png"},
    {idx:15, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
  ]

  function slideChange (idx) {
    setColor(Slides[idx].color)
  }

  function leftButtonClick(){
    if (index === 0) {
      setIndex(Slides.length-1); 
      slideChange(Slides.length-1);
    }
    else {
      setIndex(index-1); 
      slideChange(index-1);
    }
  }

  function rightButtonClick(){
    if (index === Slides.length-1) {
      setIndex(0);
      slideChange(0);
    }
    else {
      setIndex(index+1); 
      slideChange(index+1);
    }
  }

  return (
    <MainPageLayout className="MainPage">
      <MainBanner className="MainBanner" style={{backgroundColor:color}}>
        <Carousel className="Carousel">
          <CarouselInner className="CarouselInner">
            <SliderWrapper>
              <div style={{
                display: "flex",
                transitionDuration: "300ms",
                transform: `translateX(${-(100/16) * (index)}%)`
              }}>
                {Slides.map((img, index)=>{
                  return (
                    <a href="#!">
                      <img key={index} src={img.src} alt="slide img" style={{
                      }}>
                      </img>
                    </a>
                  );
                })}
              </div>
            </SliderWrapper>
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
            }} onClick={()=>{leftButtonClick()}}>
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
            }} onClick={()=>{rightButtonClick()}}>
            </div>
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
  overflow: hidden;
`;

const CarouselInner = styled.div`
  padding-top: 50%;
`;

const SliderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.5s ease-in-out;
`;
