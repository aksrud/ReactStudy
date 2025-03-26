import styled from 'styled-components';

function App() {
  const onClickEvent = () => {
    window.location.replace("https://www.Naver.com/");
  }

  return (
    <div>
      <Header>
        <HeaderContainer>
          <HomeLogo onClick={()=>{onClickEvent()}}>
           <HomeLogoImg></HomeLogoImg>
          </HomeLogo>
          <Nav>
            <div>2</div>
            <div>3</div>
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
  border-bottom: 1px solid;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 88px;
  margin: 0 auto;
`;

const HomeLogo = styled.div`
  display: flex;
  width: 281px;
  height: 88px;
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
`;