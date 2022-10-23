import { useState } from 'react';
import spinner from './helpers/spinnerStyles';
import WindowWrapper from './helpers/wrappers/WindowWrapper';
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
  Tabs,
  Tab,
  TabBody,
  Hourglass
} from 'react95';

//TODO Modules also do no cooperate here. 

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
      <WindowWrapper>
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
    </WindowWrapper>
    );
  }

  export default MainWindow;