import styled from "styled-components";
import NavDropDown from "./NavDropDown";
import { useState, useRef } from "react";

export default function Nav() {
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
              <NavLeftButton data-category="digital" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>디지털</NavLeftButton>
              <NavLeftButton data-category="computer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>컴퓨터</NavLeftButton>
              <NavLeftButton data-category="electronic" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>가전</NavLeftButton>
              <NavLeftButton data-category="beauty" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>뷰티</NavLeftButton>
              <NavLeftButton data-category="fashion" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>패션</NavLeftButton>
              <NavLeftButton data-category="fashionacc" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>패션잡화</NavLeftButton>
              <NavLeftButton data-category="smartphone" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>스마트폰</NavLeftButton>
              <NavLeftButton data-category="lifestyle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>라이프스타일</NavLeftButton>
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
const NavLeftButton = styled.div`
  position: relative;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  padding: 21px 12px;
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