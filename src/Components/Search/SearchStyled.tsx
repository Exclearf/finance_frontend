import styled from "styled-components";

const SearchStyled = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchWrapper {
    position: relative;

    z-index: 2;
  }

  .searchWrapper button {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    outline: none;

    width: 40px;
    height: 40px;
    background: transparent;
    background-color: none;
    border: none;
  }

  .searchWrapper input {
    width: 40vw;
    height: 60px;
    outline: none;
    padding: 0px 25px 0px 25px;

    border-radius: 30px;
    border: 0;
    background: linear-gradient(
      145deg,
      ${(props) => props.theme.leftGradientValue},
      ${(props) => props.theme.rightGradientValue}
    );
    box-shadow: 6px 6px 12px ${(props) => props.theme.bottomShadow},
      -6px -6px 12px ${(props) => props.theme.topShadow};
    font-size: 1.5rem;
    color: ${(props) => props.theme.textColorMain};
  }

  & input:focus{
    background: #373737;
    box-shadow: inset 6px 6px 12px ${(props) => props.theme.bottomShadow},
      inset -6px -6px 12px ${(props) => props.theme.topShadow};
    }
`;

export default SearchStyled;
