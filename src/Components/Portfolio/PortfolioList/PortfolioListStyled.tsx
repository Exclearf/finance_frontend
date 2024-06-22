import styled from "styled-components";

const PortfolioListStyled = styled.div`
  width: 100%;
  min-height: 41%;

  background: linear-gradient(
    145deg,
    ${(props) => props.theme.leftGradientValue},
    ${(props) => props.theme.rightGradientValue}
  );
  box-shadow: 7px 7px 10px ${(props) => props.theme.bottomShadow},
    -7px -7px 10px ${(props) => props.theme.topShadow};

  margin: 2% 0px 2% 0px;
  padding: 10px 30px 20px 30px;

  h3 {
    font-size: 1.8rem;
    text-align: center;
    margin: 10px 0px 30px 0px;
  }

  .portfolioItems {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default PortfolioListStyled;
