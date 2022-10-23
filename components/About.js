import styles from '../styles/About.module.css';
import { useState } from 'react';
import WeatherWindow from './WeatherWindow';
import ChessStatWindow from './ChessStatWindow';
import TabContentHeader from './TabContentHeader';
import { Fieldset, Anchor } from 'react95';

//TODO fix the list. Add array of elements to map through instead of this stupidness. 

const About = () => {

    const [showChessWindow, setShowChessWindow] = useState(false);
    const [showWeather, setShowWeather] = useState(false);

    return(
        <div>
            <TabContentHeader header="Nash Boisvert!" />
            <Fieldset className={styles.fieldSet} label="Location">
                Edmonton, Alberta, Canada - <Anchor className={styles.pointer} onClick={() => setShowWeather(true)}>[weather?]</Anchor>
                {showWeather && (
                <WeatherWindow handleWeatherClose={() => setShowWeather(false)} />
            )}
            </Fieldset>
            <Fieldset className={styles.fieldSet} label="Education">
                NAIT - Computer Software Development
            </Fieldset>
            <Fieldset className={styles.listFieldSet} label="About">
                <ul>
                    <li className={styles.li}>- 4.0 GPA</li>
                    <li className={styles.li}>- Dean&apos;s Honour Roll</li>
                    <li className={styles.li}>- 8 month COOP <Anchor href="https://www.cgi.com/en">(CGI Group)</Anchor></li>
                    <li className={styles.li}>- Full stack role</li>
                    <li className={styles.li}>- Ran student tutoring Discord</li>
                    <li className={styles.li}>- Linux lover (arch btw)</li>
                    <li className={styles.li}>- Dog lover</li>
                    <li className={styles.li}>- Obsessive <Anchor className={styles.pointer} onClick={() => setShowChessWindow(true)}>chess player</Anchor></li>
                    {showChessWindow && (
                        <ChessStatWindow handleChessClose={() => setShowChessWindow(false)}/>
                    )}
                    <li className={styles.li}>- V 1.0 released in 1996</li>
                    <li className={styles.li}>- Tinkering since 2004</li>
                    <li className={styles.li}>- Poor since 2004</li>
                    <li className={styles.li}>- Open-source contributor</li>
                    <li className={styles.li}>- Seeking full time employment</li>
                </ul>
            </Fieldset>
        </div>
    );
};

export default About;