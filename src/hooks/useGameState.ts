import {useContext} from "react"
import GameContext from "../contexts/GameContext";

function useGameState() {
    return useContext(GameContext);
};

export default useGameState;

