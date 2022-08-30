interface CubeProps {
    children?: JSX.Element; 
}

export default function Cube({ children }: CubeProps) {
    return (
        <div>
            {children}   
        </div>
    );
}

