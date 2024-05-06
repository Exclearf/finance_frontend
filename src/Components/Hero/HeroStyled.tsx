import styled from "styled-components";

const HeroStyled = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5% 0px 0px 0px;

  background-color: ${(props) => props.theme.background};

  .heroHeaderWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .heroHeader {
      width: 50vw;
      font-size: 3rem;
      background: -webkit-linear-gradient(90deg, #009174, #bbbbbb);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    .heroButton {
      width: 300px;
      height: 75px;
      margin: 20px 0px 0px 0px;

      border-radius: 10px;

      font-size: 2.3rem;
      color: ${(props) => props.theme.textColorMain};
      text-decoration: none;

      background: #009174;
      box-shadow: 3px 3px 6px ${(props) => props.theme.bottomShadow},
        -3px -3px 6px ${(props) => props.theme.topShadow};

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .heroButton:focus {
      background: #009174;
      box-shadow: inset 3px 3px 6px #005746, inset -3px -3px 6px #00cba2;
    }
  }

  .heroImage {
    width: 50vw;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0px 14px 80px 25px rgba(0, 145, 116, 1);
  }
`;

export default HeroStyled;
