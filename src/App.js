import styled from 'styled-components';

function App() {

  const onClickEvent = () => {
    window.location.replace("https://www.naver.com/");
  }
  const imageUrl = "https://static.univstore.com/web/image/logo.svg"
  
  return (
    <Layout>
      <HomeLogo onClick={()=>{
        onClickEvent()}
      }>
        <img src={imageUrl} style={{width:"281px",height:'88px'}}></img>
      </HomeLogo>
      <div>2</div>
      <div>3</div>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  height: 88px;
  border-bottom: 1px solid
`;

const HomeLogo = styled.div`
  flex: auto;
  max-width: 377px;
  margin-right: 32px;
  text-indent: -9999px;
`;