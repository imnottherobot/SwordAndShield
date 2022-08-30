import {useState} from 'react'
import GameContext from '../../contexts/GameContext';
import {ActivePlayer} from '../../enums/active_player.enum';
import {GameStateEnum} from '../../enums/game.enum'
import Canvas from '../canvas/Canvas';
import TopBar from '../topbar/TopBar';
import './Game.css'

function Game() {
  const [gameState] = useState(GameStateEnum.GAME);
  const [activePlayer] = useState(ActivePlayer.ONE);
  const login = "Gamer";
  
  return (
    <div className="Game">
      <GameContext.Provider value={{ gameState, login, activePlayer }}>
        <TopBar />
        <Canvas />
      </GameContext.Provider>
    </div>
  )
}

export default Game
