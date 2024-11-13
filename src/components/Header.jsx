import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header() 
{
    const navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/try")
    }

    return(
        <div className="container">
            <div className="header-left">
                <h1>Logo</h1>
            </div>
            <div className="header-right">
                <h2>Log In</h2>
                <h2>About</h2>
                <h2>Contact</h2>
                <h2 id="try-button" onClick={handleClick}>Try It</h2>
            </div>
        </div>
    );
}
export default Header