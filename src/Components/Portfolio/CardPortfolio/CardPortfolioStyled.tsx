import styled from "styled-components";

const CardPortfolioStyled = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: ${(props) => props.theme.background};
  box-shadow: 20px 20px 60px ${(props) => props.theme.bottomShadow},
    -20px -20px 60px ${(props) => props.theme.topShadow};

  margin: 10px;

  h4 {
    color: ${(props) => props.theme.textColorMain};
  }
`;

export default CardPortfolioStyled;
