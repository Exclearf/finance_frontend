import styled from "styled-components";

const DeleteFromPortfolioStyled = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  button {
    position: relative;

    border-radius: 10px;

    width: 30px;
    height: 30px;

    color: ${(props) => props.theme.textColorMain};

    background: linear-gradient(
      145deg,
      ${(props) => props.theme.leftGradientValue},
      ${(props) => props.theme.rightGradientValue}
    );
    box-shadow: 3px 3px 6px ${(props) => props.theme.bottomShadow},
      -3px -3px 6px ${(props) => props.theme.topShadow};
    border: none;
  }

  button:focus {
    background: ${(props) => props.theme.background};
    box-shadow: inset 3px 3px 6px ${(props) => props.theme.bottomShadow},
      inset -3px -3px 6px ${(props) => props.theme.topShadow};

    &::before {
      background-color: ${(props) => props.theme.textColorSecondary};
    }
    &::after {
      background-color: ${(props) => props.theme.textColorSecondary};
    }
  }

  button::after {
    content: "";
    width: 2px;
    height: 15px;
    background-color: ${(props) => props.theme.textColorMain};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(45deg);
  }

  button::before {
    content: "";
    width: 2px;
    height: 15px;
    background-color: ${(props) => props.theme.textColorMain};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(-45deg);
  }
`;

export default DeleteFromPortfolioStyled;
