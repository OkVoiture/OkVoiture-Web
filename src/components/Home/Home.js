import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <text className="home__text">
                    Aujourd´hui je veux...
                </text>
                <button
                    className="login__btn"
                    onClick={() => {
                        //handleClick();
                    }}
                >
                    Loyer une voiture
                </button>
                <button
                    className="login__btn"
                    onClick={() => {
                        //handleClick();
                    }}
                >
                    Offrir ma voiture
                </button>
            </div>
        </div>
    );
}

export default Home;