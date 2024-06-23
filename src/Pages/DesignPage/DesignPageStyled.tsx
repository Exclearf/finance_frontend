import styled from "styled-components";

export const DesignPageStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 10dvh 40px 0px 40px;
  background-color: ${(props) => props.theme.background};
  position: relative;
  color: ${(props) => props.theme.textColorMain};

  &>div {
    margin-top: 20px;
  }

  .ratioExample {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    flex-wrap: wrap;
  }
`;
