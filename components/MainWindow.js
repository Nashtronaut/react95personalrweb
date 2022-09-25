import styled from 'styled-components'
import media from 'styled-media-query'
import { useState } from 'react';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button,
    Toolbar,
    Panel,
    Tabs,
    Tab,
    TabBody
} from 'react95';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.desktopBackground};
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
    width: calc(100vw - 0.8rem);
    height: auto; // SUBTRACT FOR MAIN PADDING IN Home.module.css // SUBTRACT FOR MAIN
    // WINDOW SIZING, NEEDS ADJUSTING FOR RESPONSIVENESS   
  }
`;

const tabStyle = {
  width: '20%',
  maxWidth: '7.5rem'
};

const MainWindow = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {setActiveTab(value)};

    return (
      <Wrapper>
        <Window className='window'>
            <WindowHeader className='window-header'>
                <span>nashtronaut_info.exe </span>
                <Button>
                    <span className='close-icon' />
                </Button>
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
                    <p>not implemented</p>
                  )}
                  {activeTab === 3 && (
                    <p>not implemented</p>
                  )}
                  {activeTab === 4 && (
                    <Contact />
                  )}
                  
                </TabBody>
            </WindowContent>
            <Footer />
        </Window>
    </Wrapper>
    );
  }

  export default MainWindow;