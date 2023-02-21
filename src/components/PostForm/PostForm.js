import React, {useState} from "react";
import AsyncSelect from 'react-select/async';
import "./PostForm.css";
import {getVilles} from "../../utils/api/geoApi";
import {createPost} from "../../utils/api/postApi";

function PostForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [ville, setVille] = useState("");
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [prix, setPrix] = useState("");
    const [year, setYear] = useState("");
    const [photo, setPhoto] = useState("une photo");

    // handle selection
    const handleChange = value => {
        setVille(value);
    }

    async function fetchVilles() {
        const apiResponse = await getVilles();
        return apiResponse.map((ville) => {
            return {
                nom: ville.nom
            }
        });
    }

    const fileChangedHandler = (event) => {
        setPhoto(event.target.files[0]);
    }

    const handleClickSend = async () => {
        const apiResponse = await createPost(name, email, ville, marque, modele, prix, year, photo);
        console.log("backend resp: ", apiResponse);
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
                        loadOptions={fetchVilles}
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
                    <input
                        type="text"
                        className="postForm__textBox"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        placeholder="Le prix par jour"
                    />
                    <input
                        type="file"
                        onChange={fileChangedHandler}
                    />
                </div>
                <button
                    className="postForm__btn"
                    onClick={() => handleClickSend()}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}
 export default PostForm;