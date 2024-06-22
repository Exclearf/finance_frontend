import styled from "styled-components";

export const DesignPageStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0px 0px 0px;
  background-color: ${(props) => props.theme.background};
  position: relative;
  color: ${(props) => props.theme.textColorMain};
`;
