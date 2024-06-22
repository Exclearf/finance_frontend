import styled from "styled-components";

const CardStyled = styled.div`
  width: 200px;
  min-width: 200px;
  height: 325px;

  padding: 10px;

  -webkit-border-radius: 30px;
  border-radius: 30px;

  background: ${(props) => props.theme.background};
  -webkit-box-shadow: 6px 6px 10px ${(props) => props.theme.bottomShadow},
    -6px -6px 10px ${(props) => props.theme.topShadow};
  box-shadow: 6px 6px 10px ${(props) => props.theme.bottomShadow},
    -6px -6px 10px ${(props) => props.theme.topShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    min-width: 150px;
    min-height: 150px;
    width: 150px;
    height: 150px;

    -webkit-border-radius: 50%;
    border-radius: 50%;

    background: ${(props) => props.theme.background};
    -webkit-box-shadow: 6px 6px 13px ${(props) => props.theme.bottomShadow},
      -6px -6px 13px ${(props) => props.theme.topShadow};
    box-shadow: 6px 6px 13px ${(props) => props.theme.bottomShadow},
      -6px -6px 13px ${(props) => props.theme.topShadow};
  }

  .description {
    text-align: center;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    .companyName {
      width: 90%;

      margin: 3px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 1.5rem;

      color: ${(props) => props.theme.textColorMain};
    }

    .displaySymbol,
    .type {
      font-size: 1.1rem;
      color: ${(props) => props.theme.textColorSecondary};
    }
  }
`;

export default CardStyled;
