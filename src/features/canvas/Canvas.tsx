import Cube from "../cube/Cube";
import './Canvas.css';
import PawnType from "../../enums/pawn_type.enum";
import RenderPawn from "../pawn/RenderPawn";

function Canvas() {
    const cubes = [
        [0, 0, PawnType.KING, 0],
        [PawnType.SWORD, 0, 0, 0],
        [0, 0, PawnType.SWORD, 0],
        [0, PawnType.SHIELD, PawnType.KING, 0],
    ];

    return (
        <div className="canvas">
            { cubes.map((row, rowNumber) => {
                return (
                    <div key={rowNumber}>
                        { row.map((value, cubeNumber) => {
                            return (
                                <Cube key={cubeNumber}>
                                    <RenderPawn type={value} />
                                </Cube>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Canvas;
