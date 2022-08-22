import useGameState from "../../hooks/useGameState";

function Login() {
    const cprops = useGameState();
    console.log('context props', cprops);

    return (
        <span>
            Login
        </span>
    );
};

export default Login;

