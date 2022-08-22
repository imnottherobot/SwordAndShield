import { createContext } from "react";
import GameProps from "../types/GameProps";

export default createContext<GameProps | null>(null);

