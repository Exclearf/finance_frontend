import styled from "styled-components";

const CardPortfolioStyled = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};
  box-shadow: 4px 4px 7px ${(props) => props.theme.bottomShadow},
    -4px -4px 7px ${(props) => props.theme.topShadow};

  margin: 10px;

  h4 {
    color: ${(props) => props.theme.textColorMain};
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    padding: 10px;
  }
`;

export default CardPortfolioStyled;
