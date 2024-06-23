import styled from "styled-components";

const NavbarStyled = styled.div`
  height: 15%;
  width: 100%;

  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  display: grid;
  grid-template: 1fr / 200px 1fr 320px;
  grid-template-areas: "location . accountSection";

  .location {
    width: 250px;
    grid-area: location;

    display: flex;
    justify-content: start;
    align-items: center;

    font-size: 2rem;
    white-space: nowrap;

    margin: 0px 40px 0px 40px;
    padding: 0px;

    color: ${(props) => props.theme.textColorMain};
  }

  .accountSection {
    grid-area: accountSection;
    font-size: 1.25rem;
    width: 100%;

    padding: 0px 40px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    .accountSectionButton {
      width: 125px;
      height: 60px;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0px 10px 0px 10px;
      border-radius: 15px;

      background: linear-gradient(
        145deg,
        ${(props) => props.theme.leftGradientValue},
        ${(props) => props.theme.rightGradientValue}
      );
      box-shadow: 3px 3px 6px ${(props) => props.theme.bottomShadow},
        -3px -3px 6px ${(props) => props.theme.topShadow};

      color: ${(props) => props.theme.textColorMain};
    }

    .accountSectionButton:focus {
      background: ${(props) => props.theme.background};
      box-shadow: inset 3px 3px 6px ${(props) => props.theme.bottomShadow},
        inset -3px -3px 6px ${(props) => props.theme.topShadow};
    }

    .signUp {
      background: #009174;
    }

    .signUp:focus {
      background: #009174;
      box-shadow: inset 3px 3px 6px #005746, inset -3px -3px 6px #00cba2;
    }
  }
`;

export default NavbarStyled;
