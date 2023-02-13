import React, { useState } from "react";

import "./PostForm.css";

function PostForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [ville, setVille] = useState("");
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [year, setYear] = useState(null);
    const [photo, setPhoto] = useState("une photo");

    return (
        <div className="postForm">
            <div className="postForm__container">
                <text className="postForm__title">
                    Complete le formulaire s'il vous plaît
                </text>
                <text className={"postForm__subtitle"}>
                    Mon information
                </text>
                <div className={"postForm_user_fomulaire"}>
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                    />
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre e-mail"
                    />
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                        placeholder="Votre ville"
                    />
                </div>
                <text className={"postForm__subtitle"}>
                    L'information de ma voiture
                </text>
                <div className={"postForm_voiture_fomulaire"}>
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={marque}
                        onChange={(e) => setMarque(e.target.value)}
                        placeholder="La marque"
                    />
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={modele}
                        onChange={(e) => setModele(e.target.value)}
                        placeholder="Le modèle"
                    />
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="L'année"
                    />
                </div>
                <button
                    className="postForm__btn"
                    onClick={() => {
                        //handleClick();
                    }}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}
 export default PostForm;