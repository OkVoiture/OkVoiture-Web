import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClickLoyer = () => {
        navigate("/postList");
    }

    const handleClickOffrir= () => {
        navigate("/postForm");
    }
    
    return (
        <div className="home">
            <div className="home__container">
                <text className="home__text">
                    Aujourd´hui je veux...
                </text>
                <button
                    className="login__btn"
                    //onClick={() => handleClickLoyer()}
                >
                    Loyer une voiture
                </button>
                <button
                    className="login__btn"
                    onClick={() => handleClickOffrir()}
                >
                    Offrir ma voiture
                </button>
            </div>
        </div>
    );
}

export default Home;