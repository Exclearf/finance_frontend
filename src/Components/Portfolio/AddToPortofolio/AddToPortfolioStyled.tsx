import styled from "styled-components";

const AddToPortfolioStyled = styled.div`
  &.disabled-link {
    pointer-events: none;
  }
  button {
    border-radius: 30px;
    width: 100px;
    height: 40px;
    margin: 3px;

    background: linear-gradient(
      145deg,
      ${(props) => props.theme.leftGradientValue},
      ${(props) => props.theme.rightGradientValue}
    );
    box-shadow: 3px 3px 6px ${(props) => props.theme.bottomShadow},
      -3px -3px 6px ${(props) => props.theme.topShadow};
    border: none;

    color: ${(props) => props.theme.textColorMain};
  }

  button:focus {
    background: ${(props) => props.theme.background};
    box-shadow: inset 3px 3px 6px ${(props) => props.theme.bottomShadow},
      inset -3px -3px 6px ${(props) => props.theme.topShadow};

    color: ${(props) => props.theme.textColorSecondary};
  }
`;

export default AddToPortfolioStyled;
