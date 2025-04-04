import styled from "styled-components";
import NavDropDown from "./NavDropDown";
import { useState, useRef } from "react";
import NavLeftButton from "./NavLeftButton";

export default function Nav() {

  const navLefts = [
    {
      en: "digital",
      kr: "디지털",
    },
    {
      en: "computer",
      kr: "컴퓨터",
    },
    {
      en: "electronic",
      kr: "가전",
    },
    {
      en: "beauty",
      kr: "뷰티",
    },
    {
      en: "fashion",
      kr: "패션",
    },
    {
      en: "fashionacc",
      kr: "패션잡화",
    },
    {
      en: "smartphone",
      kr: "스마트폰",
    },
    {
      en: "lifestyle",
      kr: "라이프스타일",
    },
  ]

  const [activeCategory, setActiveCategory] = useState(null); // 활성화 할 드롭다운 카테고리
  const [isActive, setIsActive] = useState(false); // 드롭 다운 활성화
  var isHoverRef = useRef(false); // 호버 중인가를 체크

  function handleMouseEnter(e) {
    const category = e.target.getAttribute("data-category");
    if (category) {
      isHoverRef.current = true;
      setIsActive(true);
      setActiveCategory(category);
    }
  }

  function handleMouseLeave() {
    isHoverRef.current = false;
    setTimeout(()=>{
      if(!isHoverRef.current) {
        setIsActive(false);
      }
    },100);
  }

    return (
        <NavContainer>
          <Navs className="navs">
            <NavLeft>
              {navLefts.map((n, idx)=>{
                return (
                  <NavLeftButton key={idx} data_category={n.en} active={activeCategory === n.en && isActive} content={n.kr} OME={handleMouseEnter} OML={handleMouseLeave}></NavLeftButton>
                );
              })}
            </NavLeft>
            <NavRight>
              <NavRightButton>콘텐츠</NavRightButton>
              <NavRightButton>혜택/이벤트</NavRightButton>
              <NavRightButton>브랜드</NavRightButton>
            </NavRight>
          </Navs>
          <NavDropDown isActive={isActive} activeCategory={activeCategory} OME={()=>{isHoverRef.current=true;}} OML={()=>{isHoverRef.current=false; setIsActive(false);}} ></NavDropDown>
        </NavContainer>
    );
}

const NavContainer = styled.div`
  border-bottom: 1px solid #ecedf1;
`;

const Navs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 80.625%;
  max-width: 1032px;
`;

const NavLeft = styled.div`
  display: flex;
  margin-left: -12px;
`;

const NavRight = styled.div`
  margin-right: -12px;
`;

const NavRightButton = styled.a`
  position: relative;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  padding: 21px 12px;

  color: inherit;
`;