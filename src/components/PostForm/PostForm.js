import React, {useState} from "react";
import AsyncSelect from 'react-select/async';


import "./PostForm.css";
import {getVilles} from "../../utils/api/geoApi";

function PostForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [ville, setVille] = useState("");
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [year, setYear] = useState(null);
    const [photo, setPhoto] = useState("une photo");

    // handle selection
    const handleChange = value => {
        setVille(value);
    }

    async function fetchUsers() {
        const apiResponse = await getVilles();
        return apiResponse.map((ville) => {
            return {
                nom: ville.nom
            }
        });
    }

    return (
        <div className="postForm">
            <div className="postForm__container">
                <h1 className="postForm__title">
                    Complete le formulaire s'il vous plaît
                </h1>
                <h2 className={"postForm__subtitle"}>
                    Mon information
                </h2>
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
                    <AsyncSelect
                        className="postForm__textBox"
                        cacheOptions
                        defaultOptions
                        value={ville}
                        getOptionLabel={e => e.nom}
                        getOptionValue={e => e.nom}
                        loadOptions={fetchUsers}
                        onChange={handleChange}
                        placeholder="Votre ville"
                    />
                </div>
                <h2 className={"postForm__subtitle"}>
                    L'information de ma voiture
                </h2>
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