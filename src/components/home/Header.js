import styled from "styled-components";

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderContainer className="HeaderContainer">
        <HomeLogoContainer>
          <HomeLogo href="/"/>
        </HomeLogoContainer>
        <Nav>
          <NavAnchor href="#" style={{marginRight: "32px"}}>검색</NavAnchor>
          <NavAnchor href="#" >로그인</NavAnchor>
        </Nav>
      </HeaderContainer>
    </HeaderLayout>
  );
}

const imgUrl = "https://static.univstore.com/web/image/logo.svg"

const HeaderLayout = styled.header`
  display: flex;
  height: 88px;
  border-bottom: 1px solid #ecedf1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 88px;
  width: 80.625%;
  max-width: 1032px;
  margin: 0 auto;
`;

const HomeLogoContainer = styled.div`
  display: flex;
  width: 281px;
  height: 88px;
  left: 0px;
  top: 100px;
`;

const HomeLogo = styled.a`
  background-image: url(${imgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 281px;
  height: 88px;
  display: block;
`;

const Nav = styled.nav`
  display: flex;
  height: 88px;
  line-height: 88px;
`;

const NavAnchor = styled.a`
  color: #787a87;
  font-size: 13px;
  text-decoration: none;
`;