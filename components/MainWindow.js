import styled from 'styled-components'
import { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import MyDog from './MyDog';
import Footer from './Footer';
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Tabs,
  Tab,
  TabBody,
  Hourglass
} from 'react95';

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
    max-width: 60rem;
    height: 100%; // SUBTRACT FOR MAIN PADDING IN Home.module.css // SUBTRACT FOR MAIN
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

const tabStyle = {
  width: '20%',
  maxWidth: '7.5rem',
  fontSize: '0.75rem',
  fontWeight: 'bold',
};

const MainWindow = () => {
  
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(5);
    setTimeout(() => {
      setActiveTab(value);
    }, Math.random() * 500);
  };

  const [showDog, setShowDog] = useState(false);

  const handleShowDog = () => {
    setShowDog(true);
  };

  const handleHideDog = () => {
    setShowDog(false);
  };

    return (
      <Wrapper>
        <Window className='window'>
            <WindowHeader style={{padding: '0 0.8rem'}} className='window-header'>
                <span>nashtronaut_info.exe </span>
            </WindowHeader>

            <WindowContent style={{padding: 0}}>
                <Tabs value={activeTab} style={{margin: '0.3rem 0.5rem 0'}} onChange={handleChange}>
                    <Tab style={tabStyle} value={0}>About</Tab>
                    <Tab style={tabStyle} value={1}>Skills</Tab>
                    <Tab style={tabStyle} value={2}>Projects</Tab>
                    <Tab style={tabStyle} value={3}>Resume</Tab>
                    <Tab style={tabStyle} value={4}>Contact</Tab>
                </Tabs>

                <TabBody style={{margin: '0 0.5rem', minHeight: '42rem', position: 'relative'}}>
                    {activeTab === 0 && (
                      <About />
                    )}
                    {activeTab === 1 && (
                      <Skills />
                    )}
                    {activeTab === 2 && (
                      <Projects /> 
                    )}
                    {activeTab === 3 && (
                      <Resume />
                    )}
                    {activeTab === 4 && (
                      <Contact />
                    )}
                    {activeTab === 5 && (
                      <div>
                        <div style={spinner}><Hourglass size={50}/></div>
                      </div>
                    )}
                </TabBody>
            </WindowContent>
            <Footer showDog={handleShowDog} />
        </Window>
        {showDog && (
          <MyDog hideDog={handleHideDog} />
        )}
    </Wrapper>
    );
  }

  export default MainWindow;