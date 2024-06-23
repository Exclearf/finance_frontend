import styled from "styled-components";

export const TableStyled = styled.div`
  table {
    width: 100%;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;
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

    td {
      padding: 5px;
      text-align: center;
      margin: 3px;
      gap: 10px;
      position: relative;
      width: 100%;
      height: 100%;
    }

    td::after {
      content: "";
      position: absolute;
      width: calc(100% + 2px);
      height: 1px;
      background-color: ${(props) => props.theme.topShadow};
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
    }

    th {
      color: ${(props) => props.theme.textColorSecondary};
      opacity: 0.75;
      font-weight: 400;
    }
  }
`;
