import './Cube.css';

interface CubeProps {
    children?: JSX.Element; 
}

export default function Cube({ children }: CubeProps) {
    return (
        <div className="cube">
            {children}   
        </div>
    );
}

