import Cube from "../cube/Cube";
import './Canvas.css';

function Canvas() {
    const cubes = [
        [0, 0, 1, 0],
        [2, 0, 0, 0],
        [0, 1, 2, 0],
    ];

    return (
        <div className="canvas">
            { cubes.map((row, rowNumber) => {
                return (
                    <div key={rowNumber}>
                        { row.map((value, cubeNumber) => {
                            return (
                                <Cube key={cubeNumber}>
                                    <span>{value}</span>
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
