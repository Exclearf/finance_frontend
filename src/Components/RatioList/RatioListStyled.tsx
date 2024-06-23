import styled from "styled-components";

export const RatioListStyled = styled.div`
  min-width: 300px;
  height: 100px;

  flex: 1 0 300px;

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

  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    .title {
      color: ${(props) => props.theme.textColorMain};
      font-size: 1.35rem;
    }

    .subTitle {
      color: ${(props) => props.theme.textColorSecondary};
      font-size: 1.1rem;
    }
  }

  .content {
    color: ${(props) => props.theme.textColorMain};
    font-size: 1.5rem;
  }
`;
