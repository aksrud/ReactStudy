import {useRef, useState } from "react";
import styled from "styled-components";

export default function MainPageBasic() {
  const [col, setColor] = useState("#FFFFFF");
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const isTransition = useRef(false);

  const Slides = [
    {id:12, color:"#ffe0ed", src:"https://image.univstore.com/20250407_perfumehub_brandweek_web_maintop.png"},
    {id:0, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
    {id:1, color:"#6588b8", src:"https://image.univstore.com/20250403_samsung_galaxytabs10fe_6688b9_web_maintop.png"},
    {id:2, color:"#FFFFFF", src:"https://image.univstore.com/20250403_apple_ipadair_m3_preorder_web_maintop.jpg"},
    {id:3, color:"#e6ffe5", src:"https://image.univstore.com/20250401_samsung_galaxybook5_promotion_e6ffe5_web_maintop.png"},
    {id:4, color:"#ddddff", src:"https://image.univstore.com/20250113_dyson_dyson_brandweek_web_maintop_DDDDFE.png"},
    {id:5, color:"#ebdcd7", src:"https://image.univstore.com/20250217_sony_audio_brandweek_ebdcd7_web_maintop.png"},
    {id:6, color:"#dae7e9", src:"https://image.univstore.com/20250211_samsung_tabphone_web_maintop.png"},
    {id:7, color:"#cecece", src:"https://image.univstore.com/20250407_canon_powershotv1_launching_web_maintop_CFCFCF.jpg"},
    {id:8, color:"#c9ced2", src:"https://image.univstore.com/20250219_sennheiser_nukak_v2_c9ced2_web_maintop.png"},
    {id:9, color:"#fbd9ed", src:"https://image.univstore.com/20250407_lg_gram_lunarlake_launching_rev2_fbd8ec_web_maintop.png"},
    {id:10, color:"#fff8f3", src:"https://image.univstore.com/20250407_microsoft_windows11_eos_fff8f3_web_maintop.png"},
    {id:11, color:"#faf0f0", src:"https://image.univstore.com/20250317_bose_brandweek_faf0f0_web_maintop.png"},
    {id:12, color:"#ffe0ed", src:"https://image.univstore.com/20250407_perfumehub_brandweek_web_maintop.png"},
    {id:0, color:"#FFFFFF", src:"https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg"},
  ];

  const SlideLength = Slides.length;

  function slideChange(idx) {
    if (!isTransition.current) {
      if (idx === -1 || idx === SlideLength) return;
      isTransition.current = true;
      console.log(isTransition.current);
      setTransition(true);
      setIndex(idx);
      setColor(Slides[idx].color);
      if (idx === 0 || idx === SlideLength-1) {
        setTimeout(()=>{
          setTransition(false);
          idx === 0 ? setIndex(SlideLength-2) : setIndex(1);
        }, 500);
      }
      setTimeout(()=>{isTransition.current = false}, 500);
    }
  }

  return (
    <MainPageLayout className="MainPage">
      <MainBanner className="MainBanner" style={{backgroundColor:col}}>
        <Carousel className="Carousel">
          <CarouselInner className="CarouselInner">
            <SliderWrapper>
              <div 
                style={{
                  display: "flex",
                  transition: transition ? `transform 0.5s ease-in-out` : `transform 0s ease-in-out`,
                  transform: `translateX(${-(100/SlideLength) * (index)}%)`
                }}
                >
                {Slides.map((img, idx)=>{
                  return (
                    <a href="#!">
                      <img key={idx} src={img.src} alt="slide img" style={{
                      }}>
                      </img>
                    </a>
                  );
                })}
              </div>
            </SliderWrapper>
            <SwiperButtonPrev onClick={()=>{slideChange(index-1)}}></SwiperButtonPrev>
            <SwiperButtonNext onClick={()=>{slideChange(index+1)}}></SwiperButtonNext>
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
`;

const SwiperButtonPrev = styled.div`
  background-image: url("https://www.univstore.com/image/ic-arrow-forward-black.png");
  left: 0;
  transform: rotate(180deg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  width: 48px;
  height: 100%;
  background-position-x: 16px;
  right: auto;
  position: absolute;
`;

const SwiperButtonNext = styled.div`
  background-image: url("https://www.univstore.com/image/ic-arrow-forward-black.png");
  right: 0;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  width: 48px;
  height: 100%;
  background-position-x: 6px;
  left: auto;
  position: absolute;
`;