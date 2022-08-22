import {ActivePlayer} from "../enums/active_player.enum";
import {GameStateEnum} from "../enums/game.enum";

export default interface GameProps {
   gameState: GameStateEnum; 
   login: string;
   activePlayer: ActivePlayer;
}
