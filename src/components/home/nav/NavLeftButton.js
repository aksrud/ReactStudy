import styled from "styled-components";

export default function NavLeftButton({data_category, active, content, OME, OML}) {
  return (
    <NavLeftButtonS style={{
      color: active ? 'red' : 'black'
    }} data-category={data_category} onMouseEnter={OME} onMouseLeave={OML}>{content}</NavLeftButtonS>
  );
}

const NavLeftButtonS = styled.div`
  position: relative;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  padding: 21px 12px;
  cursor: pointer;
  `;