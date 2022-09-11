import Login from "../../components/login/Login";
import Score from "../score/Score";

function TopBar() {
    return (
        <div>
            <Score />
            <Login />
        </div>
    );
}

export default TopBar;
