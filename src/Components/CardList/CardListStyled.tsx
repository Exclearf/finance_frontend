import styled from "styled-components";

const CardListStyled = styled.div`
  width: 100dvw;
  height: 40dvh;
  padding: 1% 20px 1% 20px;
  overflow-x: scroll;
  overflow-y: hidden;

  background-color: ${props => props.theme.background};

  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.bottomShadow};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.bottomShadow};
  }
`;

export default CardListStyled;
