import styled from "styled-components";

export default function Nav() {
    return (
        <NavContainer>
          <Navs>
            <NavLeft>
              <NavLeftButton>디지털</NavLeftButton>
              <NavLeftButton>컴퓨터</NavLeftButton>
              <NavLeftButton>가전</NavLeftButton>
              <NavLeftButton>뷰티</NavLeftButton>
              <NavLeftButton>패션</NavLeftButton>
              <NavLeftButton>패션잡화</NavLeftButton>
              <NavLeftButton>스마트폰</NavLeftButton>
              <NavLeftButton>라이프스타일</NavLeftButton>
            </NavLeft>
            <NavRight>
              <NavRightButton>콘텐츠</NavRightButton>
              <NavRightButton>혜택/이벤트</NavRightButton>
              <NavRightButton>브랜드</NavRightButton>
            </NavRight>
          </Navs>
        </NavContainer>
    );
}

const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ecedf1;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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