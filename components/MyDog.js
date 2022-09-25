import styled from 'styled-components'
import { useState } from 'react';
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar,
  Hourglass,
  List,
  Image,
  ListItem,
  Divider
} from 'react95';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-height: 60rem;
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
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
    width: 85%;
    height: 60%;
    max-width: 60rem; // SUBTRACT FOR MAIN PADDING IN Home.module.css // SUBTRACT FOR MAIN
    // WINDOW SIZING, NEEDS ADJUSTING FOR RESPONSIVENESS   
  }
`;

const spinner = {
  position: 'absolute',
  zIndex: 1,
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const MyDog = ({hideDog}) => {

    const [activePhoto, setActivePhoto] = useState(0);

    const handleChange = (e) => {
        setActivePhoto(5);

        setTimeout(() => {
            setActivePhoto(e.target.value);
        }, Math.random() * 500);
    };

    return (
      <Wrapper>
        <Window className='window'>
            <WindowHeader className='window-header'>
                <span>grizzlee_adams_viewer.exe </span>
                <Button onClick={hideDog}>
                    <span className='close-icon' />
                </Button>
            </WindowHeader>
        
            <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
                <List inline style={{justifyContent: 'center', width: '100%', gap: '0.3rem', padding: '0.3rem 1rem', boxShadow: 'none'}}>
                    <ListItem style={{padding: 0, fontWeight: 'bold'}} value={0} onClick={handleChange} size='sm'>
                        cute
                    </ListItem>
                    <Divider style={{height: '1rem'}} orientation="vertical"/>
                    <ListItem style={{padding: 0, fontWeight: 'bold'}} value={1} onClick={handleChange} size='sm'>
                        handsome
                    </ListItem>
                    <Divider style={{height: '1rem'}} orientation="vertical"/>
                    <ListItem style={{padding: 0, fontWeight: 'bold'}} value={2} onClick={handleChange} size='sm'>
                        sleepy
                    </ListItem>
                    <Divider style={{height: '1rem'}} orientation="vertical"/>
                    <ListItem style={{padding: 0, fontWeight: 'bold'}} value={3} onClick={handleChange} size='sm'>
                        goofy
                    </ListItem>
                    <Divider style={{height: '1rem'}} orientation="vertical"/>
                    <ListItem style={{padding: 0, fontWeight: 'bold'}} value={4} onClick={handleChange} size='sm'>
                        hungry
                    </ListItem>
                </List>
            </Toolbar>

            <WindowContent style={{display: 'flex', justifyContent: 'center', alignContent: 'center', padding: 0}}>
                    {activePhoto === 0 && (
                      <p>cute</p>
                    )}
                    {activePhoto === 1 && (
                      <p>handsome</p>
                    )}
                    {activePhoto === 2 && (
                      <p>goofy</p>
                    )}
                    {activePhoto === 3 && (
                      <p>sleepy</p>
                    )}
                    {activePhoto === 4 && (
                      <p>please see all photos</p>
                    )}
                    {activePhoto === 5 && (
                      <div>
                        <div style={spinner}><Hourglass size={35}/></div>
                      </div>
                    )}
            </WindowContent>
        </Window>
    </Wrapper>
    );
  }

  export default MyDog;