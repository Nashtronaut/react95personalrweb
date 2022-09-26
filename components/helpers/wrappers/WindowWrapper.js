import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.desktopBackground};
  width: 100vw;
  display: flex;
  justify-content: center;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 99%;
    max-width: 70rem;
    height: 100%; // SUBTRACT FOR MAIN PADDING IN Home.module.css // SUBTRACT FOR MAIN
    // WINDOW SIZING, NEEDS ADJUSTING FOR RESPONSIVENESS   
  }
`;

const WindowWrapper = ({children}) => {
    return <Wrapper>{children}</Wrapper>;
}

export default WindowWrapper;
