import styles from '../styles/ChessStatWindow.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/future/image';
import ChessKnight from '../public/img/chess-knight.png';
import getChessData from './helpers/api/getChessData';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button,
    Anchor
} from 'react95';

const ChessStatWindow = (props) => {
    
    const handleChessClose = props.handleChessClose; 
    const [chessData, setChessData] = useState(null);

    useEffect(() => {
       const chessDataGetter = async () => {
            let data = await getChessData();
            console.log(data)
            setChessData(data);
            return; 
       }
       chessDataGetter();
    }, [])

    return (
            <Window className={styles.window}>
                <WindowHeader className="window-header">
                    <span>chess_stats.exe</span>
                    <Button onClick={handleChessClose}>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
                <WindowContent>
                    {chessData && (
                        <div className={styles.contentDiv}>
                            <p>... but not a good one.</p>
                            <Image src={ChessKnight} alt="Chess Knight" height={80} />
                            <div className={styles.statsContainer}>
                                <Anchor style={{textAlign: 'center'}} href="https://www.chess.com/member/nashtronaut">nashtronaut</Anchor>

                                <div className={styles.recordContainer}>
                                    <p>W: {chessData.playerStats.recordWins}</p>
                                    <p>D: {chessData.playerStats.recordDraws}</p>
                                    <p>L: {chessData.playerStats.recordLoss}</p> 
                                </div>
                                
                                <p>since {chessData.player.joined.toLocaleDateString('en')}</p>
                                <p>last seen {chessData.player.lastOnline.toLocaleDateString('en')}</p>
                                <p>best rating: {chessData.playerStats.best_rating} elo</p>
                                <p>current: {chessData.playerStats.current_rating} elo</p>
                            </div>
                        </div>
                    )}
                </WindowContent>
            </Window>    
    );
};

export default ChessStatWindow;