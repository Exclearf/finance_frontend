import styled from "styled-components";

export const TableStyled = styled.div`
  table {
    border-radius: 15px;
    border: 0;
    background: linear-gradient(
      145deg,
      ${(props) => props.theme.leftGradientValue},
      ${(props) => props.theme.rightGradientValue}
    );
    box-shadow: 6px 6px 12px ${(props) => props.theme.bottomShadow},
      -6px -6px 12px ${(props) => props.theme.topShadow};
    font-size: 1.15rem;
    color: ${(props) => props.theme.textColorMain};

    tr {
      border-top: 1px solid red;
    }
  }
`;
