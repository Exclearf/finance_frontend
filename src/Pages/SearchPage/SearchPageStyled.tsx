import styled from "styled-components";

const SearchPageStyled = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  position: relative;
  color: ${(props) => props.theme.textColorMain};

  .errorWrapper {
    width: 100%;
    height: 40dvh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SearchPageStyled;
