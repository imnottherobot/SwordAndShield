import Cube from "../cube/Cube";

function Canvas() {
    const cubes = [0, 0, 1, 0, 2, 0, 0, 0, 0];

    return (
        <div>
            { cubes.map((value, number) => {
                return (
                    <Cube key={number}>
                        <span>{value}</span>
                    </Cube>
                );
            })}
        </div>
    );
};

export default Canvas;
