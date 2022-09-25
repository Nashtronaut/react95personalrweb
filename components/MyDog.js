import styled from 'styled-components'
import { useState } from 'react';
import Image from 'next/future/image';
import cute from '../public/img/cute.png';
import goofy from '../public/img/goofy.png';
import handsome from '../public/img/handsome.png';
import sleepy from '../public/img/sleepy.png';
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar,
  Hourglass,
  List,
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
    height: 65%; // SUBTRACT FOR MAIN PADDING IN Home.module.css // SUBTRACT FOR MAIN
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
        <Window style={{maxWidth: '35rem', maxHeight: '40rem'}} className='window'>
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

            <WindowContent style={{overflow: 'hidden', display: 'flex', justifyContent: 'center', alignContent: 'center', padding: 0, height: '100%', width: '100%'}}>
                    {activePhoto === 0 && (
                        <div style={{textAlign: 'center'}}>
                            <Image style={{height: '75%', width: 'auto'}} src={cute} alt="Cute dog"/>
                            <p style={{margin: '0.2rem'}}>The cutest dog you ever did see</p>
                        </div>
                    )}
                    {activePhoto === 1 && (
                        <div style={{textAlign: 'center'}}>
                            <Image style={{height: '75%', width: 'auto'}} src={handsome} alt="Handsome dog"/>
                            <p style={{margin: '0.2rem'}}>The handomest dog you ever did see</p>
                        </div>
                    )}
                    {activePhoto === 2 && (
                        <div style={{textAlign: 'center'}}>
                            <Image style={{height: '75%', width: 'auto'}} src={sleepy} alt="Sleepy dog"/>
                            <p style={{margin: '0.2rem'}}>The sleepiest dog you ever did see</p>
                        </div>
                    )}
                    {activePhoto === 3 && (
                        <div style={{textAlign: 'center'}}>
                            <Image style={{height: '75%', width: 'auto'}} src={goofy} alt="Goofy dog"/>
                            <p style={{margin: '0.2rem'}}>The goofiest dog you ever did see</p>
                        </div>
                    )}
                    {activePhoto === 4 && (
                      <p style={{fontSize: '2rem'}}>please see all photos</p>
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