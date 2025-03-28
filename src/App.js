import styled from 'styled-components';

function App() {
  const onClickEvent = () => {
    window.location.replace("https://www.Naver.com/");
  }

  return (
    <div className='App'>
      <Header>
        <HeaderContainer>
          <HomeLogo>
           <HomeLogoImg></HomeLogoImg>
          </HomeLogo>
          <Nav>
            <NavAnchor style={{
              marginRight: "32px"
            }}>검색</NavAnchor>
            <NavAnchor>로그인</NavAnchor>
          </Nav>
        </HeaderContainer>
      </Header>
    </div>
  );
}

export default App;

const imageUrl = "https://static.univstore.com/web/image/logo.svg"

const Header = styled.header`
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

const HomeLogo = styled.div`
  display: flex;
  width: 281px;
  height: 88px;
  left: 0px;
  top: 100px;
`;

const HomeLogoImg = styled.img.attrs({
  src: imageUrl,
})`
  max-width: 100%;
  max-height: 100%;
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